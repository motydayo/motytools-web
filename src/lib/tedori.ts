// 手取り計算の概算モデル。
// 前提: 協会けんぽ（東京）・令和7年度料率。賞与は月割りに含む簡易計算。
// 住民税は当年所得ベースで概算（実際は前年所得ベース）。

export type AgeBand = 'u40' | '40-64' | '65+';

export interface TedoriResult {
  nenshu: number;
  kenkoHoken: number; // 健康保険（本人負担・年間）
  kaigoHoken: number; // 介護保険（本人負担・年間）
  koseiNenkin: number; // 厚生年金（本人負担・年間）
  koyoHoken: number; // 雇用保険（年間）
  shakaiHokenGokei: number; // 社会保険料合計
  shotokuzei: number; // 所得税（復興特別所得税込み）
  juminzei: number; // 住民税
  tedori: number; // 手取り年額
  tedoriTsuki: number; // 手取り月額
  tedoriHiritsu: number; // 額面比（%）
}

/** 給与所得控除（令和7年分以降） */
function kyuyoShotokuKoujo(nenshu: number): number {
  if (nenshu <= 1_900_000) return 650_000;
  if (nenshu <= 3_600_000) return nenshu * 0.3 + 80_000;
  if (nenshu <= 6_600_000) return nenshu * 0.2 + 440_000;
  if (nenshu <= 8_500_000) return nenshu * 0.1 + 1_100_000;
  return 1_950_000;
}

/** 所得税の基礎控除（令和7・8年分。本ツールは簡易的に段階のみ反映） */
function kisoKoujoShotoku(kyuyoShotoku: number): number {
  if (kyuyoShotoku <= 1_320_000) return 950_000;
  if (kyuyoShotoku <= 3_360_000) return 880_000;
  if (kyuyoShotoku <= 4_890_000) return 680_000;
  if (kyuyoShotoku <= 6_550_000) return 630_000;
  if (kyuyoShotoku <= 23_500_000) return 580_000;
  return 480_000;
}

/** 所得税の累進税率（復興特別所得税1.021倍込み） */
function shotokuzeiGaku(kazeiShotoku: number): number {
  let zei: number;
  if (kazeiShotoku <= 1_950_000) zei = kazeiShotoku * 0.05;
  else if (kazeiShotoku <= 3_300_000) zei = kazeiShotoku * 0.1 - 97_500;
  else if (kazeiShotoku <= 6_950_000) zei = kazeiShotoku * 0.2 - 427_500;
  else if (kazeiShotoku <= 9_000_000) zei = kazeiShotoku * 0.23 - 636_000;
  else if (kazeiShotoku <= 18_000_000) zei = kazeiShotoku * 0.33 - 1_536_000;
  else if (kazeiShotoku <= 40_000_000) zei = kazeiShotoku * 0.4 - 2_796_000;
  else zei = kazeiShotoku * 0.45 - 4_796_000;
  return Math.max(0, zei) * 1.021;
}

export function calcTedori(nenshu: number, ageBand: AgeBand, dependents: number): TedoriResult | null {
  if (!Number.isFinite(nenshu) || nenshu <= 0 || !Number.isFinite(dependents) || dependents < 0) return null;

  const getsugaku = nenshu / 12;

  const kenkoHoken = (Math.min(getsugaku, 1_390_000) * 0.0991) / 2 * 12;
  const kaigoHoken = ageBand === '40-64' ? (Math.min(getsugaku, 1_390_000) * 0.0159) / 2 * 12 : 0;
  const koseiNenkin = (Math.min(getsugaku, 650_000) * 0.183) / 2 * 12;
  const koyoHoken = nenshu * 0.0055;
  const shakaiHokenGokei = kenkoHoken + kaigoHoken + koseiNenkin + koyoHoken;

  const kyuyoKoujo = kyuyoShotokuKoujo(nenshu);
  const kyuyoShotoku = Math.max(0, nenshu - kyuyoKoujo);

  const kisoKoujo = kisoKoujoShotoku(kyuyoShotoku);
  const fuyoKoujoShotoku = 380_000 * dependents;
  const kazeiShotokuShotokuzeiRaw = kyuyoShotoku - shakaiHokenGokei - kisoKoujo - fuyoKoujoShotoku;
  const kazeiShotokuShotokuzei = Math.max(0, Math.floor(kazeiShotokuShotokuzeiRaw / 1000) * 1000);
  const shotokuzei = shotokuzeiGaku(kazeiShotokuShotokuzei);

  const fuyoKoujoJumin = 330_000 * dependents;
  const kazeiShotokuJumin = Math.max(0, kyuyoShotoku - shakaiHokenGokei - 430_000 - fuyoKoujoJumin);
  const juminzeiRaw = kazeiShotokuJumin * 0.1 + 5_000 - 2_500;
  const juminzei = Math.max(0, juminzeiRaw);

  const tedori = nenshu - shakaiHokenGokei - shotokuzei - juminzei;
  const tedoriTsuki = tedori / 12;
  const tedoriHiritsu = (tedori / nenshu) * 100;

  return {
    nenshu,
    kenkoHoken,
    kaigoHoken,
    koseiNenkin,
    koyoHoken,
    shakaiHokenGokei,
    shotokuzei,
    juminzei,
    tedori,
    tedoriTsuki,
    tedoriHiritsu,
  };
}
