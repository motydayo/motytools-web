// 住宅ローンシミュレーターの計算ロジック（元利均等・元金均等）。

export type RepayType = 'gentei' | 'genkin'; // 元利均等 / 元金均等

export interface LoanYearRow {
  year: number; // 経過年
  zandaka: number; // ローン残高
  risokuRuikei: number; // 支払利息累計
}

export interface LoanResult {
  monthlyPaymentFirst: number; // 毎月の返済額（元金均等は初回）
  monthlyPaymentLast: number; // 毎月の返済額（元金均等は最終回。元利均等は同額）
  totalPayment: number; // 総返済額
  totalInterest: number; // うち利息
  rows: LoanYearRow[]; // 年別残高テーブル
}

/** 元利均等の月返済額 */
function gentaiKintoMonthly(L: number, i: number, n: number): number {
  if (i === 0) return L / n;
  const factor = Math.pow(1 + i, n);
  return (L * i * factor) / (factor - 1);
}

export function calcLoan(
  loanAmount: number,
  annualRatePercent: number,
  years: number,
  repayType: RepayType
): LoanResult | null {
  if (
    !Number.isFinite(loanAmount) ||
    loanAmount <= 0 ||
    !Number.isFinite(annualRatePercent) ||
    annualRatePercent < 0 ||
    !Number.isFinite(years) ||
    years <= 0
  ) {
    return null;
  }

  const i = annualRatePercent / 100 / 12;
  const n = Math.round(years * 12);

  const rows: LoanYearRow[] = [];

  if (repayType === 'gentei') {
    const monthly = gentaiKintoMonthly(loanAmount, i, n);
    let zandaka = loanAmount;
    let risokuRuikei = 0;

    for (let m = 1; m <= n; m++) {
      const risoku = i === 0 ? 0 : zandaka * i;
      const gankin = monthly - risoku;
      zandaka = Math.max(0, zandaka - gankin);
      risokuRuikei += risoku;

      if (m % 12 === 0 || m === n) {
        const year = Math.ceil(m / 12);
        rows.push({ year, zandaka, risokuRuikei });
      }
    }

    const totalPayment = monthly * n;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyPaymentFirst: monthly,
      monthlyPaymentLast: monthly,
      totalPayment,
      totalInterest,
      rows,
    };
  } else {
    const gankinMonthly = loanAmount / n;
    let zandaka = loanAmount;
    let risokuRuikei = 0;
    let firstPayment = 0;
    let lastPayment = 0;

    for (let m = 1; m <= n; m++) {
      const risoku = i === 0 ? 0 : zandaka * i;
      const payment = gankinMonthly + risoku;
      if (m === 1) firstPayment = payment;
      if (m === n) lastPayment = payment;
      zandaka = Math.max(0, zandaka - gankinMonthly);
      risokuRuikei += risoku;

      if (m % 12 === 0 || m === n) {
        const year = Math.ceil(m / 12);
        rows.push({ year, zandaka, risokuRuikei });
      }
    }

    const totalPayment = loanAmount + risokuRuikei;
    const totalInterest = risokuRuikei;

    return {
      monthlyPaymentFirst: firstPayment,
      monthlyPaymentLast: lastPayment,
      totalPayment,
      totalInterest,
      rows,
    };
  }
}
