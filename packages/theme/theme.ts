import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography, elevation } from '@atlantum/tokens';

export const theme: DefaultTheme = {
    borderRadius: spacing.s2,
    colors: {
        primaryLight: colors.blue['500'],
        primaryBase: colors.blue['700'],
        primaryDark: colors.blue['1000'],

        secondaryLight: colors.green['500'],
        secondaryBase: colors.green['600'],
        secondaryDark: colors.green['900'],

        successLight: colors.green['500'],
        successBase: colors.green['700'],
        successDark: colors.green['900'],

        warningBase: colors.warning['100'],
        warningDark: colors.warning['200'],
        warningLight: colors.warning['300'],

        dangerLight: colors.danger['100'],
        dangerBase: colors.danger['200'],
        dangerDark: colors.danger['300'],

        text: colors.neutral['1200'],
        textInverted: colors.neutral['25'],

        background: colors.neutral['25'],
        backgroundInverted: colors.neutral['1800'],

        neutralLighter: colors.neutral['25'],
        neutralLight: colors.neutral['50'],
        neutralBase: colors.neutral['300'],
        neutralDark: colors.neutral['700'],
        neutralDarker: colors.neutral['900'],
    },

    spacing: {
        space1: spacing.s1,
        space2: spacing.s2,
        space4: spacing.s4,
        space8: spacing.s8,
        space10: spacing.s10,
        space12: spacing.s12,
        space16: spacing.s16,
        space20: spacing.s20,
        space22: spacing.s22,
        space24: spacing.s24,
        space30: spacing.s30,
        space32: spacing.s32,
        space36: spacing.s36,
        space40: spacing.s40,
        space48: spacing.s48,
        space64: spacing.s64,
    },

    elevation: {
        slight: elevation.slight,
        medium: elevation.medium,
    },

    typography: {
        family: {
            base: `Inter -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            heading: `Inter -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },
        fontSize: {
            h1: typography.size.h1,
            h2: typography.size.h2,
            h3: typography.size.h3,
            h4: typography.size.h4,
            h5: typography.size.h5,
            h6: typography.size.h6,
            base: typography.size.base,
            label: typography.size.label,
            subLabel: typography.size.subLabel,
        },

        lineHeight: {
            h1: typography.lineHeight.h1,
            h2: typography.lineHeight.h2,
            h3: typography.lineHeight.h3,
            h4: typography.lineHeight.h4,
            h5: typography.lineHeight.h5,
            h6: typography.lineHeight.h6,
            base: typography.lineHeight.base,
            label: typography.lineHeight.label,
            subLabel: typography.lineHeight.subLabel,
        },

        fontWeight: {
            regular: typography.fontWeight.regular,
            semiBold: typography.fontWeight.semiBold,
            bold: typography.fontWeight.bold,
        },
    },

    animation: {
        base: `0.2s ease-in-out`,
    },
};
