// 数値表示の共通ユーティリティ。全ツールでこれを使い、表記ゆれを防ぐ。

/** 12345678 -> "12,345,678" */
export function fmtNum(n: number, maxFractionDigits = 0): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('ja-JP', { maximumFractionDigits: maxFractionDigits });
}

/** 12345678 -> "12,345,678円" */
export function fmtYen(n: number): string {
  if (!Number.isFinite(n)) return '—';
  return `${Math.round(n).toLocaleString('ja-JP')}円`;
}

/** 12345678 -> "1,234.6万円"（大きな金額の要約表示に） */
export function fmtMan(n: number): string {
  if (!Number.isFinite(n)) return '—';
  const man = n / 10000;
  return `${man.toLocaleString('ja-JP', { maximumFractionDigits: man >= 100 ? 0 : 1 })}万円`;
}

/** 入力文字列を数値に。全角数字・カンマ・空白を許容。数値でなければ NaN */
export function parseNum(s: string): number {
  const normalized = s
    .replace(/[０-９．]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[,，\s]/g, '');
  if (normalized === '' || normalized === '-' || normalized === '.') return NaN;
  return Number(normalized);
}

/**
 * コピー用ボタンの共通挙動。
 * クリックで getText() の文字列をクリップボードへコピーし、1.5秒間 .is-copied を付ける。
 * ボタンは .btn-copy で、中に .label-default / .label-done の2つのラベルを持つこと。
 */
export function bindCopy(btn: HTMLButtonElement, getText: () => string): void {
  btn.addEventListener('click', async () => {
    const text = getText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.classList.add('is-copied');
    setTimeout(() => btn.classList.remove('is-copied'), 1500);
  });
}
