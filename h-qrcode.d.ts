// heavilly inspired by https://github.com/davidshimjs/qrcodejs/pull/134/commits/d6b51e6596897338fb91ea2113514b06328b3be1
declare module 'h-qrcode' {
    export class QRCode {
        constructor(containingElement: HTMLElement, config?: QRCodeConfig);

        static CorrectLevel: CorrectLevel;

        clear(): void;

        makeCode(text: string);

        makeImage();
    }

    const enum ColorPreset {
        Zero = 0,
        One,
        Two,
        Three,
        Four,
        Five,
    }

    interface QRCodeConfig {
        text?: string;
        width?: number;
        height?: number;
        colorDark?: string;
        colorLight?: string;
        correctLevel?: number;
        typeNumber?: number;
        isDotted?: boolean,
        dotColors?: string[],
        colorful?: boolean,
        usePreset?: ColorPreset,
    }

    interface CorrectLevel {
        L: number;
        M: number;
        Q: number;
        H: number;
    }

    export default QRCode;
}
