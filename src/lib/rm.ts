// 筋トレ計算（1RM・プレート・ウォームアップ）。副作用なしの純関数。アトイチ本体と同じ式。

/** 0.5kg単位に丸める */
export const roundHalf = (x: number): number => Math.round(x * 2) / 2;

/** Epley式: 重さ × (1 + 回数/30)。1回ならそのままの重さ */
export function epley(weight: number, reps: number): number {
  return reps <= 1 ? weight : weight * (1 + reps / 30);
}

/** 推定1RM（0.5kg丸め） */
export function estimate1RM(weight: number, reps: number): number {
  return roundHalf(epley(weight, reps));
}

/** 割合と回数の目安（95%=2回 … 70%=12回） */
export const PERCENT_ROWS: { pct: number; reps: number }[] = [
  { pct: 95, reps: 2 },
  { pct: 90, reps: 4 },
  { pct: 85, reps: 6 },
  { pct: 80, reps: 8 },
  { pct: 75, reps: 10 },
  { pct: 70, reps: 12 },
];

/** 表示している推定1RMに割合をかけて0.5kgに丸めた、重さの目安表 */
export function percentTable(oneRm: number): { pct: number; weight: number; reps: number }[] {
  return PERCENT_ROWS.map((r) => ({ ...r, weight: roundHalf((oneRm * r.pct) / 100) }));
}

export interface PlateResult {
  /** 片側につけるプレート（重い順） */
  perSide: { plate: number; count: number }[];
  /** バー＋プレートで実際に作れる合計の重さ */
  made: number;
  /** 目標に足りない重さ（合計で。0なら作れる） */
  shortage: number;
}

/** つけたい合計の重さから、片側につけるプレートを大きい順に選ぶ。バー未満なら null */
export function plateBreakdown(target: number, bar: number, plates: number[]): PlateResult | null {
  if (!(target >= bar)) return null;
  const unit = 100; // 小数の誤差を避けるため 0.01kg を1とする整数で計算
  let rest = Math.round(((target - bar) / 2) * unit);
  const sorted = [...plates].filter((p) => p > 0).sort((a, b) => b - a);
  const perSide: { plate: number; count: number }[] = [];
  let used = 0;
  for (const p of sorted) {
    const pu = Math.round(p * unit);
    const count = Math.floor(rest / pu);
    if (count > 0) {
      perSide.push({ plate: p, count });
      rest -= count * pu;
      used += count * pu;
    }
  }
  const made = bar + (2 * used) / unit;
  const shortage = Math.round(((2 * rest) / unit) * 100) / 100;
  return { perSide, made, shortage };
}

export interface WarmupRow {
  weight: number;
  reps: number;
  /** 本番の重さに対する割合（バーだけの行は null） */
  pct: number | null;
}

/** ウォームアップ: バーだけ×10、40%×8、60%×5、75%×3、90%×1。刻みに丸め、バー未満はバー。本番以上・同じ重さの重複は省く */
export function warmupSteps(work: number, bar: number, step = 2.5): WarmupRow[] {
  const rows: WarmupRow[] = [{ weight: bar, reps: 10, pct: null }];
  const stages: [number, number][] = [
    [0.4, 8],
    [0.6, 5],
    [0.75, 3],
    [0.9, 1],
  ];
  for (const [ratio, reps] of stages) {
    const w = Math.max(bar, Math.round((work * ratio) / step) * step);
    if (w >= work) continue;
    if (rows.some((r) => r.weight === w)) continue;
    rows.push({ weight: w, reps, pct: Math.round(ratio * 100) });
  }
  return rows;
}
