// 元号データ。西暦⇔和暦変換・年齢早見表で共通利用する。

export interface Era {
  name: string; // 例: '令和'
  since: string; // 開始日 YYYY-MM-DD
  until: string | null; // 終了日（現行元号は null）
  offset: number; // 西暦 = offset + 和暦年
}

export const ERAS: Era[] = [
  { name: '令和', since: '2019-05-01', until: null, offset: 2018 },
  { name: '平成', since: '1989-01-08', until: '2019-04-30', offset: 1988 },
  { name: '昭和', since: '1926-12-25', until: '1989-01-07', offset: 1925 },
  { name: '大正', since: '1912-07-30', until: '1926-12-24', offset: 1911 },
  { name: '明治', since: '1868-10-23', until: '1912-07-29', offset: 1867 },
];

/** 干支（子〜亥）。干支 = ETO[(西暦 - 4) % 12] */
export const ETO = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

/** 西暦から干支を求める（2026年=午） */
export function etoOf(year: number): string {
  const idx = ((year - 4) % 12 + 12) % 12;
  return ETO[idx];
}
