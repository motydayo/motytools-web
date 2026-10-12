import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { APP_SLUGS } from './data/apps';

// 使い方ガイドの記事。書式は src/content/guide/README.md を参照。
const guide = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/README.md', '!**/_*.md'], base: './src/content/guide' }),
  schema: z.object({
    /** 記事タイトル（h1・titleタグ。32〜40字目安、検索語を前に） */
    title: z.string().min(8).max(60),
    /** meta description（80〜120字） */
    description: z.string().min(40).max(160),
    /** どのアプリの記事か（src/data/apps.ts の slug） */
    app: z.enum(APP_SLUGS),
    /** 狙う主な検索語（例: 'インスタ レシピ 保存'）。画面には出ない */
    primary: z.string().min(2),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    /** よくある質問。答えはプレーンテキスト（構造化データにそのまま出る） */
    faq: z.array(z.object({ q: z.string().min(4), a: z.string().min(10) })).default([]),
    /** true にすると公開されない（一覧・サイトマップからも消える） */
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide };
