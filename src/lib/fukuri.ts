// 複利・積立シミュレーターの計算ロジック（月次複利）。

export type AccountType = 'taxable' | 'nisa';

export interface FukuriYearRow {
  year: number;
  gankin: number; // 元本累計
  hyoka: number; // 評価額
  unyouEki: number; // 運用収益（評価額 − 元本累計）
}

export interface FukuriResult {
  finalValue: number; // 最終評価額（税引前）
  gankinGokei: number; // 元本合計
  unyouEki: number; // 運用収益（税引前）
  tax: number; // 課税口座の場合の税額
  afterTaxValue: number; // 税引後の最終資産額
  rows: FukuriYearRow[]; // 年別テーブル（1年ごと）
}

const TAX_RATE = 0.20315; // 課税口座の税率（20.315%）

/** 月次複利での将来価値。r=年利（0.05など）、n=月数 */
function futureValue(initial: number, monthly: number, r: number, n: number): number {
  const rMonthly = r / 12;
  if (rMonthly === 0) {
    return initial + monthly * n;
  }
  const growth = Math.pow(1 + rMonthly, n);
  return initial * growth + monthly * ((growth - 1) / rMonthly);
}

export function calcFukuri(
  initial: number,
  monthly: number,
  annualRate: number,
  years: number,
  accountType: AccountType
): FukuriResult | null {
  if (
    !Number.isFinite(initial) ||
    initial < 0 ||
    !Number.isFinite(monthly) ||
    monthly < 0 ||
    !Number.isFinite(annualRate) ||
    annualRate < 0 ||
    !Number.isFinite(years) ||
    years <= 0
  ) {
    return null;
  }

  const r = annualRate / 100;
  const totalMonths = Math.round(years * 12);

  const rows: FukuriYearRow[] = [];
  for (let y = 1; y <= Math.round(years); y++) {
    const n = y * 12;
    const gankin = initial + monthly * n;
    const hyoka = futureValue(initial, monthly, r, n);
    rows.push({ year: y, gankin, hyoka, unyouEki: hyoka - gankin });
  }

  const finalValue = futureValue(initial, monthly, r, totalMonths);
  const gankinGokei = initial + monthly * totalMonths;
  const unyouEki = Math.max(0, finalValue - gankinGokei);

  const tax = accountType === 'taxable' ? unyouEki * TAX_RATE : 0;
  const afterTaxValue = finalValue - tax;

  return { finalValue, gankinGokei, unyouEki, tax, afterTaxValue, rows };
}
