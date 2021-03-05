import { DefaultTheme } from 'styled-components';
import {
    colors,
    spacing,
    typography,
    elevation,
    layout,
} from '@atlantum/tokens';

export const lightTheme: DefaultTheme = {
    borderRadius: spacing.s8,
    baseSpace: spacing.s24,

    colors: {
        primary100: colors.blue.c500,
        primary200: colors.blue.c600,
        primary300: colors.blue.c700,
        primary400: colors.blue.c800,

        accent100: colors.yellow.c200,
        accent200: colors.yellow.c300,
        accent300: colors.yellow.c400,
        accent400: colors.yellow.c500,

        neutralGlobalBG: colors.neutral.c50,
        neutralContentBG: colors.neutral.white,
        neutral100: colors.neutral.c100,
        neutral200: colors.neutral.c200,
        neutral300: colors.neutral.c600,
        neutral400: colors.neutral.c800,

        dangerBG: colors.red.c700,
        danger100: colors.red.c100,
        danger200: colors.red.c500,
        danger300: colors.red.c600,

        warningBG: colors.orange.c700,
        warning100: colors.orange.c100,
        warning200: colors.orange.c500,
        warning300: colors.orange.c600,

        successBG: colors.green.c700,
        success100: colors.green.c100,
        success200: colors.green.c500,
        success300: colors.green.c600,

        infoBG: colors.cyan.c700,
        info100: colors.cyan.c100,
        info200: colors.cyan.c500,
        info300: colors.cyan.c600,
    },

    spacing: {
        space1: spacing.s1,
        space2: spacing.s2,
        space4: spacing.s4,
        space7: spacing.s7,
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
        space72: spacing.s72,
    },

    layout: {
        columns: layout.columns,
        column: layout.column,
        columnGap: layout.columnGap,
        rowGap: layout.rowGap,
        containerWidth: layout.containerWidth,
        containerMaxWidth: layout.containerMaxWidth,
        largeBp: layout.largeBp,
        mediumBp: layout.mediumBp,
        smallBp: layout.smallBp,
    },

    elevation: {
        soft: {
            low: elevation.lightTheme.soft.low,
            medium: elevation.lightTheme.soft.medium,
            high: elevation.lightTheme.soft.high,
        },
        medium: {
            low: elevation.lightTheme.soft.low,
            medium: elevation.lightTheme.soft.medium,
            high: elevation.lightTheme.soft.high,
        },
        hard: {
            low: elevation.lightTheme.soft.low,
            medium: elevation.lightTheme.soft.medium,
            high: elevation.lightTheme.soft.high,
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
