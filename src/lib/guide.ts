import { getCollection, type CollectionEntry } from 'astro:content';

export type GuideEntry = CollectionEntry<'guide'>;

/** 公開中の記事（新しい順） */
export async function getGuides(): Promise<GuideEntry[]> {
  const all = await getCollection('guide', (e) => !e.data.draft);
  return all.sort((a, b) => updatedOf(b).getTime() - updatedOf(a).getTime());
}

export function updatedOf(e: GuideEntry): Date {
  return e.data.updatedAt ?? e.data.publishedAt;
}

/** 2026-10-12 形式（構造化データ・サイトマップ用） */
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** 2026年10月12日 形式（画面表示用） */
export function jaDate(d: Date): string {
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

export type BodyPart = { kind: 'html'; html: string } | { kind: 'cta'; app?: string };

const MARKER = /<p>\s*\[\[app(?::([a-z0-9-]+))?\]\]\s*<\/p>/g;

/**
 * 記事本文のHTMLを、アプリ誘導ブロックの位置で切り分ける。
 * - 本文に [[app]] / [[app:<slug>]] だけの段落があれば、そこに誘導ブロックを置く
 * - 1つも無ければ、h2が3つ以上ある記事に限り、真ん中のh2の直前へ自動で1つ置く
 */
export function splitBody(html: string): BodyPart[] {
  if (!MARKER.test(html)) {
    MARKER.lastIndex = 0;
    const h2s = [...html.matchAll(/<h2[\s>]/g)].map((m) => m.index ?? 0);
    if (h2s.length < 3) return [{ kind: 'html', html }];
    const at = h2s[Math.floor(h2s.length / 2)];
    return [
      { kind: 'html', html: html.slice(0, at) },
      { kind: 'cta' },
      { kind: 'html', html: html.slice(at) },
    ];
  }
  MARKER.lastIndex = 0;
  const parts: BodyPart[] = [];
  let last = 0;
  for (const m of html.matchAll(MARKER)) {
    const i = m.index ?? 0;
    if (i > last) parts.push({ kind: 'html', html: html.slice(last, i) });
    parts.push({ kind: 'cta', app: m[1] });
    last = i + m[0].length;
  }
  if (last < html.length) parts.push({ kind: 'html', html: html.slice(last) });
  return parts;
}
