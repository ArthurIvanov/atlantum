import { DefaultTheme } from 'styled-components';
import {
    colors,
    spacing,
    typography,
    elevation,
    layout,
} from '@atlantum/tokens';

export const theme: DefaultTheme = {
    borderRadius: spacing.s2,
    colors: {
        primaryLight: colors.blue.c500,
        primaryBase: colors.blue.c700,
        primaryDark: colors.blue.c900,

        secondaryLight: colors.green.c500,
        secondaryBase: colors.green.c700,
        secondaryDark: colors.green.c900,

        successLight: colors.green.c500,
        successBase: colors.green.c700,
        successDark: colors.green.c900,

        warningDark: colors.orange.c500,
        warningBase: colors.orange.c700,
        warningLight: colors.orange.c900,

        dangerLight: colors.red.c500,
        dangerBase: colors.red.c700,
        dangerDark: colors.red.c900,

        text: colors.neutral.c1200,
        textInverted: colors.neutral.c25,

        background: colors.neutral.c25,
        backgroundInverted: colors.neutral.c1800,

        neutralLighter: colors.neutral.c25,
        neutralLight: colors.neutral.c50,
        neutralBase: colors.neutral.c300,
        neutralDark: colors.neutral.c700,
        neutralDarker: colors.neutral.c900,
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

    layout: {
        columns: layout.columns,
        column: layout.column,
        columnGap: layout.columnGap,
        rowGap: layout.rowGap,
    },

    elevation: {
        slight: elevation.slight,
        medium: elevation.medium,
    },

    typography: {
        family: {
            base: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            heading: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
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
