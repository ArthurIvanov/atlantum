import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string;

        colors: {
            readonly primaryLight: string;
            readonly primaryBase: string;
            readonly primaryDark: string;

            readonly secondaryLight: string;
            readonly secondaryBase: string;
            readonly secondaryDark: string;

            readonly successLight: string;
            readonly successBase: string;
            readonly successDark: string;

            readonly warningLight: string;
            readonly warningBase: string;
            readonly warningDark: string;

            readonly dangerLight: string;
            readonly dangerBase: string;
            readonly dangerDark: string;

            readonly text: string;
            readonly textInverted: string;

            readonly background: string;
            readonly backgroundInverted: string;

            readonly neutralLighter: string;
            readonly neutralLight: string;
            readonly neutralBase: string;
            readonly neutralDark: string;
            readonly neutralDarker: string;
        };

        spacing: {
            readonly space1?: string;
            readonly space2?: string;
            readonly space4?: string;
            readonly space8?: string;
            readonly space10?: string;
            readonly space12?: string;
            readonly space16?: string;
            readonly space20?: string;
            readonly space22?: string;
            readonly space24?: string;
            readonly space32?: string;
            readonly space36?: string;
            readonly space40?: string;
            readonly space48?: string;
            readonly space64?: string;
        };

        elevation?: {
            slight?: string;
        };

        typography: {
            family: {
                base: string;
                monospace: string;
            };

            size: {
                readonly 100?: string;
                readonly 200?: string;
                readonly 300?: string;
                readonly 400?: string;
                readonly 500?: string;
                readonly 600?: string;
                readonly 700?: string;
                readonly 800?: string;
                readonly 900?: string;
            };

            lineHeight: {
                readonly 16: string;
                readonly 20: string;
                readonly 24: string;
                readonly 32: string;
                readonly 40: string;
                readonly 48: string;
                readonly 64: string;
            };

            weight: {
                readonly 400: string;
                readonly 500: string;
                readonly 700: string;
            };
        };

        animation: {
            base: string;
        };
    }
}
