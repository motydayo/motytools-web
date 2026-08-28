/**
 * 建物の減価償却（定額法）。
 *
 * 大家ノート（iPhoneアプリ）の src/domain/depreciationService.ts と同じ計算。
 * ロジックを変えるときは両方を揃えること。
 *
 * 対応範囲は住宅用の建物のみ・定額法のみ・中古取得は簡便法。
 * 設備や構築物を分けて償却する用途には対応しない（会計ソフトの領域）。
 */

export type BuildingStructure =
  | 'wood'
  | 'wood_mortar'
  | 'steel_light_3mm'
  | 'steel_light_4mm'
  | 'steel_heavy'
  | 'brick'
  | 'rc';

/** 住宅用建物の法定耐用年数（減価償却資産の耐用年数等に関する省令 別表第一） */
export const STATUTORY_USEFUL_LIFE: Record<BuildingStructure, number> = {
  wood: 22,
  wood_mortar: 20,
  steel_light_3mm: 19,
  steel_light_4mm: 27,
  steel_heavy: 34,
  brick: 38,
  rc: 47,
};

export const STRUCTURE_LABEL: Record<BuildingStructure, string> = {
  wood: '木造',
  wood_mortar: '木骨モルタル造',
  steel_light_3mm: '軽量鉄骨（骨格材3mm以下）',
  steel_light_4mm: '軽量鉄骨（骨格材3mm超4mm以下）',
  steel_heavy: '重量鉄骨（骨格材4mm超）',
  brick: 'れんが・石・ブロック造',
  rc: '鉄筋コンクリート造（RC・SRC）',
};

/**
 * 定額法の償却率。
 * 国税庁の償却率表は「1÷耐用年数を小数第4位で切り上げ」た値と一致する
 * （22年→0.046、27年→0.038、34年→0.030、47年→0.022 で検証済み）。
 */
export function straightLineRate(usefulLifeYears: number): number {
  if (usefulLifeYears < 2) return 0;
  const scaled = Math.round((1 / usefulLifeYears) * 1000 * 1e6) / 1e6;
  return Math.ceil(scaled) / 1000;
}

/** 'yyyy-MM' 同士の月数差 */
function monthsBetween(from: string, to: string): number {
  const [fy, fm] = from.split('-').map(Number);
  const [ty, tm] = to.split('-').map(Number);
  if (!fy || !fm || !ty || !tm) return 0;
  return (ty - fy) * 12 + (tm - fm);
}

/**
 * 中古で取得した建物の耐用年数（簡便法）。
 * - 築年数が法定耐用年数以上: 法定耐用年数 × 0.2
 * - 未満: (法定耐用年数 − 築年数) + 築年数 × 0.2
 * 月数で計算し、最後に年未満を切り捨てる。2年未満は2年。
 */
export function usefulLifeYears(
  structure: BuildingStructure,
  builtOn: string,
  acquiredOn: string,
): number {
  const statutory = STATUTORY_USEFUL_LIFE[structure];
  const ageMonths = Math.max(0, monthsBetween(builtOn, acquiredOn));
  if (ageMonths === 0) return statutory;

  const statutoryMonths = statutory * 12;
  const months =
    ageMonths >= statutoryMonths
      ? statutoryMonths * 0.2
      : statutoryMonths - ageMonths + ageMonths * 0.2;

  return Math.max(2, Math.floor(months / 12));
}

export interface DepreciationInput {
  /** 建物だけの取得価額（円）。土地は含めない */
  buildingPrice: number;
  structure: BuildingStructure;
  /** 建てられた年月 'yyyy-MM' */
  builtOn: string;
  /** 取得した年月 'yyyy-MM' */
  acquiredOn: string;
}

export interface DepreciationYearRow {
  year: number;
  /** その年に使った月数（取得年だけ月割りになる） */
  months: number;
  amount: number;
  /** その年の終わりに残る帳簿価額 */
  bookValue: number;
}

export interface DepreciationResult {
  usefulLife: number;
  rate: number;
  /** 新築取得ならfalse。中古なら簡便法を使っている */
  isUsed: boolean;
  /** 取得時点の築年数（月） */
  ageMonthsAtAcquisition: number;
  /** 年ごとの明細（償却が終わるまで） */
  rows: DepreciationYearRow[];
  /** 初年度の償却費 */
  firstYearAmount: number;
  /** 満額の年の償却費 */
  fullYearAmount: number;
  /** 償却が終わる年 */
  lastYear: number;
}

function monthsUsedInYear(acquiredOn: string, year: number): number {
  const acqYear = Number(acquiredOn.slice(0, 4));
  const acqMonth = Number(acquiredOn.slice(5, 7));
  if (year < acqYear) return 0;
  if (year > acqYear) return 12;
  return 12 - acqMonth + 1;
}

/**
 * 償却の全期間を計算する。
 * 最終年は備忘価額として1円だけ残す（帳簿から資産が消えないようにするための決まり）。
 */
export function calcDepreciation(input: DepreciationInput): DepreciationResult | null {
  const { buildingPrice, structure, builtOn, acquiredOn } = input;
  if (!(buildingPrice > 0) || !structure || !builtOn || !acquiredOn) return null;
  if (monthsBetween(builtOn, acquiredOn) < 0) return null;

  const life = usefulLifeYears(structure, builtOn, acquiredOn);
  const rate = straightLineRate(life);
  const ageMonths = Math.max(0, monthsBetween(builtOn, acquiredOn));
  const acqYear = Number(acquiredOn.slice(0, 4));
  const limit = buildingPrice - 1; // 備忘価額1円

  const rows: DepreciationYearRow[] = [];
  let accumulated = 0;
  // 償却しきるまで回す。月割りぶん最大で耐用年数+1年かかる
  for (let y = acqYear; y <= acqYear + life + 1; y++) {
    const months = monthsUsedInYear(acquiredOn, y);
    const raw = Math.floor((buildingPrice * rate * months) / 12);
    const amount = Math.min(raw, limit - accumulated);
    if (amount <= 0) break;
    accumulated += amount;
    rows.push({ year: y, months, amount, bookValue: buildingPrice - accumulated });
    if (accumulated >= limit) break;
  }

  return {
    usefulLife: life,
    rate,
    isUsed: ageMonths > 0,
    ageMonthsAtAcquisition: ageMonths,
    rows,
    firstYearAmount: rows[0]?.amount ?? 0,
    fullYearAmount: Math.floor(buildingPrice * rate),
    lastYear: rows[rows.length - 1]?.year ?? acqYear,
  };
}

/**
 * 建物と土地の按分。売買契約書に建物価格が無いとき、
 * 固定資産税評価額の比で購入総額を割り振る。
 */
export function buildingPriceFromTaxValuation(
  totalPrice: number,
  landValuation: number,
  buildingValuation: number,
): number | null {
  if (!(totalPrice > 0)) return null;
  const sum = landValuation + buildingValuation;
  if (!(sum > 0)) return null;
  return Math.floor((totalPrice * buildingValuation) / sum);
}
