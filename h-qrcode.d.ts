// heavilly inspired by https://github.com/davidshimjs/qrcodejs/pull/134/commits/d6b51e6596897338fb91ea2113514b06328b3be1
declare module 'h-qrcode' {
    export class QRCode {
        constructor(containingElement: HTMLElement, config?: QRCodeConfig);

        static CorrectLevel: CorrectLevel;

        clear(): void;

        makeCode(text: string);
    }

    interface QRCodeConfig {
        text?: string;
        width?: number;
        height?: number;
        colorDark?: string;
        colorLight?: string;
        correctLevel?: number;
    }

    interface CorrectLevel {
        L: number;
        M: number;
        Q: number;
        H: number;
    }

    export default QRCode;
}
