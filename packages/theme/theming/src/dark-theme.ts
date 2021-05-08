import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography, elevation, layout } from './tokens';

export const darkTheme: DefaultTheme = {
    borderRadius: spacing.s8,
    baseSpace: spacing.s24,

    colors: {
        primary: {
            100: colors.blue.c500,
            200: colors.blue.c400,
            300: colors.blue.c300,
            400: colors.blue.c200,
        },
        secondary: {
            100: colors.yellow.c700,
            200: colors.yellow.c600,
            300: colors.yellow.c500,
            400: colors.yellow.c300,
        },

        neutral: {
            100: colors.neutral.c800,
            200: colors.neutral.c700,
            300: colors.neutral.c400,
            400: colors.neutral.c100,
            500: colors.neutral.c900,
            600: colors.neutral.c1000,
        },

        danger: {
            100: colors.red.c500,
            200: colors.red.c400,
            300: colors.red.c300,
            400: colors.red.c200,
            500: colors.red.c1100,
        },

        warning: {
            100: colors.orange.c500,
            200: colors.orange.c400,
            300: colors.orange.c300,
            400: colors.orange.c200,
            500: colors.orange.c1100,
        },

        success: {
            100: colors.green.c500,
            200: colors.green.c400,
            300: colors.green.c300,
            400: colors.green.c200,
            500: colors.green.c1100,
        },

        info: {
            100: colors.cyan.c500,
            200: colors.cyan.c400,
            300: colors.cyan.c300,
            400: colors.cyan.c200,
            500: colors.cyan.c1100,
        },
    },

    spacing: {
        1: spacing.s1,
        2: spacing.s2,
        4: spacing.s4,
        7: spacing.s7,
        8: spacing.s8,
        10: spacing.s10,
        12: spacing.s12,
        16: spacing.s16,
        20: spacing.s20,
        22: spacing.s22,
        24: spacing.s24,
        30: spacing.s30,
        32: spacing.s32,
        36: spacing.s36,
        40: spacing.s40,
        48: spacing.s48,
        64: spacing.s64,
        72: spacing.s72,
    },

    layout: {
        columns: layout.columns,
        column: layout.column,
        columnGap: layout.columnGap,
        rowGap: layout.rowGap,
        fluidWidth: layout.fluidWidth,
        fixedWidth: layout.fixedWidth,
        largeBp: layout.largeBp,
        mediumBp: layout.mediumBp,
        smallBp: layout.smallBp,
    },

    elevation: {
        soft: {
            low: elevation.darkTheme.soft.low,
            medium: elevation.darkTheme.soft.medium,
            high: elevation.darkTheme.soft.high,
        },
        medium: {
            low: elevation.darkTheme.soft.low,
            medium: elevation.darkTheme.soft.medium,
            high: elevation.darkTheme.soft.high,
        },
        hard: {
            low: elevation.darkTheme.soft.low,
            medium: elevation.darkTheme.soft.medium,
            high: elevation.darkTheme.soft.high,
        },
    },

    typography: {
        family: {
            base: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            heading: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },
        fontSize: {
            h0: typography.size.h0,
            h1: typography.size.h1,
            h2: typography.size.h2,
            h3: typography.size.h3,
            h4: typography.size.h4,
            h5: typography.size.h5,
            h6: typography.size.h6,
            base: typography.size.base,
            label: typography.size.label,
            subLabel: typography.size.subLabel,
            helper: typography.size.helper,
        },

        lineHeight: {
            h0: typography.lineHeight.h0,
            h1: typography.lineHeight.h1,
            h2: typography.lineHeight.h2,
            h3: typography.lineHeight.h3,
            h4: typography.lineHeight.h4,
            h5: typography.lineHeight.h5,
            h6: typography.lineHeight.h6,
            base: typography.lineHeight.base,
            label: typography.lineHeight.label,
            subLabel: typography.lineHeight.subLabel,
            helper: typography.lineHeight.helper,
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
