import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string;
        baseStep: string;

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
            readonly space7?: string;
            readonly space8?: string;
            readonly space10?: string;
            readonly space12?: string;
            readonly space16?: string;
            readonly space20?: string;
            readonly space22?: string;
            readonly space24?: string;
            readonly space30?: string;
            readonly space32?: string;
            readonly space36?: string;
            readonly space40?: string;
            readonly space48?: string;
            readonly space64?: string;
        };

        layout?: {
            columns?: number;
            column?: number;
            columnGap?: string;
            rowGap?: string;
        };

        elevation?: {
            slight?: string;
            medium?: string;
        };

        typography: {
            family: {
                base: string;
                heading: string;
                monospace: string;
            };

            fontSize: {
                h6: string;
                h5: string;
                h4: string;
                h3: string;
                h2: string;
                h1: string;
                base: string;
                label: string;
                subLabel: string;
            };

            lineHeight: {
                readonly h1: string;
                readonly h2: string;
                readonly h3: string;
                readonly h4: string;
                readonly h5: string;
                readonly h6: string;
                readonly base: string;
                readonly label: string;
                readonly subLabel: string;
            };

            fontWeight: {
                readonly regular: string;
                readonly semiBold: string;
                readonly bold: string;
            };
        };

        animation: {
            base: string;
        };
    }
}
