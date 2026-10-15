// 図鑑の見本をCDPで撮影する（担当Hの撮影スクリプトを共通化）。
// 使い方: node scripts/shoot-zukan.mjs <出力フォルダ> <jobs.json> [ポート]
// job: { url, w, h, name, tune: 'min'|'max'|null, wait, clip: 'demo'|'tuner'|null, js }
import { spawn } from 'node:child_process';
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
const [out, jobsFile] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const jobs = JSON.parse(readFileSync(jobsFile, 'utf8'));
const port = Number(process.argv[4] ?? 9333);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${out}/.chrome`, 'about:blank',
], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws;
for (let i = 0; i < 40; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    const page = list.find((t) => t.type === 'page');
    ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
    break;
  } catch { await sleep(250); }
}
let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
};
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send('Page.enable');
await send('Runtime.enable');
for (const j of jobs) {
  const mobile = j.w < 600;
  await send('Emulation.setDeviceMetricsOverride', { width: j.w, height: j.h ?? 1300, deviceScaleFactor: 1, mobile });
  await send('Page.navigate', { url: j.url });
  await sleep(1500);
  if (j.tune) {
    await ev(`(() => { document.querySelectorAll('[data-zk-tuner] [data-key]').forEach((el) => {
      if (el.type === 'range') { el.value = ${j.tune === 'max' ? 'el.max' : 'el.min'}; }
      else if (el.type === 'color') { el.value = '${j.tune === 'max' ? '#2f9e44' : '#f2b300'}'; }
      el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }); })()`);
  }
  if (j.js) await ev(j.js);
  await sleep(j.wait ?? 2500);
  let clip;
  if (j.clip) {
    const sel = j.clip === 'demo' ? '.ugd-demo' : j.clip === 'tuner' ? '[data-zk-tuner]' : j.clip;
    const r = await ev(`(() => { const e = document.querySelector('${sel}'); e.scrollIntoView({block:'start'}); const b = e.getBoundingClientRect(); return {x:b.left, y:b.top + scrollY, width:b.width, height:b.height}; })()`);
    if (r) clip = { ...r, scale: 1 };
  }
  const shot = await send('Page.captureScreenshot', { format: 'png', ...(clip ? { clip, captureBeyondViewport: true } : {}) });
  writeFileSync(`${out}/${j.name}.png`, Buffer.from(shot.result.data, 'base64'));
  console.log('ok', j.name);
}
ws.close();
chrome.kill();
process.exit(0);
