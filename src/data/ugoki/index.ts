import type { Ugoki } from './types';
export * from './types';

// entries/ にファイルを置くだけで図鑑に載る（通し番号順）
const mods = import.meta.glob<{ default: Ugoki }>('./entries/*.ts', { eager: true });
export const UGOKI: Ugoki[] = Object.values(mods)
  .map((m) => m.default)
  .sort((a, b) => a.no - b.no);

export const getUgoki = (slug: string) => {
  const u = UGOKI.find((x) => x.slug === slug);
  if (!u) throw new Error(`動きの図鑑に ${slug} がありません`);
  return u;
};

export const UGOKI_PUBLISHED = '2026-10-15';
