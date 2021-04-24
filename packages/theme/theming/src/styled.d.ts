import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string;
        baseSpace: string;

        colors: {
            readonly primary100: string;
            readonly primary200: string;
            readonly primary300: string;
            readonly primary400: string;

            readonly accent100: string;
            readonly accent200: string;
            readonly accent300: string;
            readonly accent400: string;

            readonly dangerBG: string;
            readonly danger100: string;
            readonly danger200: string;
            readonly danger300: string;

            readonly warningBG: string;
            readonly warning100: string;
            readonly warning200: string;
            readonly warning300: string;

            readonly successBG: string;
            readonly success100: string;
            readonly success200: string;
            readonly success300: string;

            readonly infoBG: string;
            readonly info100: string;
            readonly info200: string;
            readonly info300: string;

            readonly neutralGlobalBG: string;
            readonly neutralContentBG: string;
            readonly neutral100: string;
            readonly neutral200: string;
            readonly neutral300: string;
            readonly neutral400: string;
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
            readonly space72?: string;
        };

        layout?: {
            columns?: number;
            column?: number;
            columnGap?: string;
            rowGap?: string;
            fluidWidth?: string;
            fixedWidth?: string;
            largeBp?: string;
            mediumBp?: string;
            smallBp?: string;
        };

        elevation?: {
            soft: {
                low: string;
                medium: string;
                high: string;
            };
            medium: {
                low: string;
                medium: string;
                high: string;
            };
            hard: {
                low: string;
                medium: string;
                high: string;
            };
        };

        typography: {
            family: {
                base: string;
                heading: string;
                monospace: string;
            };

            fontSize: {
                h0: string;
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                base: string;
                label: string;
                subLabel: string;
                helper: string;
            };

            lineHeight: {
                readonly h0: string;
                readonly h1: string;
                readonly h2: string;
                readonly h3: string;
                readonly h4: string;
                readonly h5: string;
                readonly h6: string;
                readonly base: string;
                readonly label: string;
                readonly subLabel: string;
                readonly helper: string;
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
