// つまみ（数値を変えて試す）の値の書き方。ページを作るとき（サーバー）と、つまみを動かしたとき（ブラウザ）の両方で使う。
import type { Lang, TuneParam } from '../../data/ugoki/types';

export type Fmt = 'css' | 'n' | 't';

const decimals = (step: number) => {
  const s = String(step);
  return s.includes('.') ? s.split('.')[1].length : 0;
};

const TEXT_UNIT: Record<Lang, Record<string, string>> = {
  ja: { s: '秒', ms: 'ミリ秒', px: 'px', '%': '%', deg: '度', em: 'em', '': '' },
  en: { s: 's', ms: 'ms', px: 'px', '%': '%', deg: '°', em: 'em', '': '' },
};

/** つまみの値を、書く場所に合わせた文字にする */
export function formatTune(p: TuneParam, value: string | number, fmt: Fmt, lang: Lang): string {
  if (p.type === 'color') return String(value);
  if (p.type === 'select') {
    if (fmt === 't') return p.options.find((o) => o.value === value)?.label ?? String(value);
    return String(value);
  }
  const n = Number(value).toFixed(decimals(p.step));
  if (fmt === 'n') return n;
  if (fmt === 'css') return `${n}${p.unit}`;
  return `${n}${TEXT_UNIT[lang][p.unit]}`;
}

/** 見本に渡す CSS 変数（--t-<key>） */
export function tuneVars(params: TuneParam[] | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  for (const p of params ?? []) out[`--t-${p.key}`] = formatTune(p, p.value, 'css', 'en');
  return out;
}

export const TOKEN = /\{\{(\w+)(?::(n|t))?\}\}/g;

/** 文章（指示文など）の差し込み口を、HTMLの小さな札（span）に置き換える */
export function fillHtml(text: string, params: TuneParam[] | undefined, lang: Lang, escape: (s: string) => string): string {
  const map = new Map((params ?? []).map((p) => [p.key, p]));
  let out = '';
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const p = map.get(m[1]);
    if (!p) throw new Error(`差し込み口 {{${m[1]}}} に対応するつまみがありません`);
    const fmt = (m[2] as Fmt) ?? 'css';
    out += escape(text.slice(last, m.index)) + `<span class="zk-tv" data-t="${p.key}" data-f="${fmt}">${escape(formatTune(p, p.value, fmt, lang))}</span>`;
    last = m.index! + m[0].length;
  }
  return out + escape(text.slice(last));
}

/** 差し込み口を初期値の文字に置き換える（コピー用・検索向けの本文用） */
export function fillText(text: string, params: TuneParam[] | undefined, lang: Lang): string {
  const map = new Map((params ?? []).map((p) => [p.key, p]));
  return text.replace(TOKEN, (_, key: string, f?: Fmt) => {
    const p = map.get(key);
    if (!p) throw new Error(`差し込み口 {{${key}}} に対応するつまみがありません`);
    return formatTune(p, p.value, f ?? 'css', lang);
  });
}

/** コードの色付けの前に、差し込み口を色付けで分断されない目印に置き換える */
export const toSentinel = (code: string) => code.replace(TOKEN, (_, key: string, f?: Fmt) => `TUNE${key}X${f ?? 'css'}X`);
export const SENTINEL = /TUNE(\w+?)X(css|n|t)X/g;
