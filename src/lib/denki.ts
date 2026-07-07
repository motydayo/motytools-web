// 電気代計算ロジック。

export interface DenkiPreset {
  label: string;
  watt: number;
}

// 表記は「目安」。全国家庭電気製品公正取引協議会の目安単価(31円/kWh, 2022年7月改定)を既定値に使う。
export const DEFAULT_UNIT_PRICE = 31;

export const DENKI_PRESETS: DenkiPreset[] = [
  { label: 'エアコン冷房(6畳)', watt: 570 },
  { label: 'エアコン暖房(6畳)', watt: 660 },
  { label: '扇風機', watt: 30 },
  { label: 'サーキュレーター', watt: 25 },
  { label: 'ドライヤー', watt: 1200 },
  { label: '電子レンジ', watt: 1400 },
  { label: '炊飯器(炊飯中)', watt: 700 },
  { label: 'テレビ(43型液晶)', watt: 90 },
  { label: '冷蔵庫(400L級)', watt: 29 },
  { label: 'デスクトップPC', watt: 100 },
  { label: 'ノートPC', watt: 30 },
  { label: 'ゲーム機', watt: 180 },
  { label: 'LEDシーリングライト', watt: 35 },
  { label: 'こたつ', watt: 300 },
  { label: '電気毛布', watt: 40 },
  { label: '電気ケトル', watt: 1250 },
  { label: 'アイロン', watt: 1200 },
  { label: '加湿器', watt: 300 },
  { label: '除湿機', watt: 300 },
  { label: '洗濯機', watt: 500 },
];

export interface DenkiResult {
  perHour: number;
  perDay: number;
  perMonth: number; // 30日換算
  perYear: number; // 365日換算
}

export function calcDenki(watt: number, hoursPerDay: number, unitPrice: number): DenkiResult | null {
  if (
    !Number.isFinite(watt) ||
    watt <= 0 ||
    !Number.isFinite(hoursPerDay) ||
    hoursPerDay <= 0 ||
    !Number.isFinite(unitPrice) ||
    unitPrice <= 0
  ) {
    return null;
  }

  const perHour = (watt / 1000) * unitPrice;
  const perDay = perHour * hoursPerDay;
  const perMonth = perDay * 30;
  const perYear = perDay * 365;

  return { perHour, perDay, perMonth, perYear };
}
