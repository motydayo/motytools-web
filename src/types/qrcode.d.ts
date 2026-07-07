// qrcode パッケージには型定義が同梱されていないための最小限の型宣言。
// /qr/ ページで使用する API のみをカバーする。
declare module 'qrcode' {
  export interface QRCodeToDataURLOptions {
    width?: number;
    margin?: number;
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    color?: {
      dark?: string;
      light?: string;
    };
    type?: 'image/png' | 'image/jpeg' | 'image/webp';
  }

  export interface QRCodeToStringOptions {
    type?: 'svg' | 'utf8' | 'terminal';
    width?: number;
    margin?: number;
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    color?: {
      dark?: string;
      light?: string;
    };
  }

  const QRCode: {
    toCanvas(
      canvas: HTMLCanvasElement,
      text: string,
      options?: QRCodeToDataURLOptions
    ): Promise<HTMLCanvasElement>;
    toDataURL(text: string, options?: QRCodeToDataURLOptions): Promise<string>;
    toString(text: string, options?: QRCodeToStringOptions): Promise<string>;
  };

  export default QRCode;
}
