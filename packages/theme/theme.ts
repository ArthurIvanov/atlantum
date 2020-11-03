import { DefaultTheme } from 'styled-components';
import {
    colors,
    spacing,
    typography,
    elevation,
} from '../tokens';

export const theme: DefaultTheme = {
    borderRadius: spacing.s2,

    colors: {
        primaryLight: colors.blue['400'],
        primaryBase: colors.blue['500'],
        primaryDark: colors.blue['600'],

        secondaryBase: colors.blue['400'],
        secondaryDark: colors.blue['500'],
        secondaryLight: colors.blue['100'],

        successLight: colors.success['100'],
        successBase: colors.success['200'],
        successDark: colors.success['300'],

        warningBase: colors.warning['100'],
        warningDark: colors.warning['200'],
        warningLight: colors.warning['300'],

        dangerLight: colors.danger['100'],
        dangerBase: colors.danger['200'],
        dangerDark: colors.danger['300'],

        text: colors.neutral['900'],
        textInverted: colors.neutral['100'],

        background: colors.neutral['100'],
        backgroundInverted: colors.neutral['900'],

        neutralLighter: colors.neutral['200'],
        neutralLight: colors.neutral['300'],
        neutralBase: colors.neutral['400'],
        neutralDark: colors.neutral['600'],
        neutralDarker: colors.neutral['800'],
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
        space32: spacing.s32,
        space36: spacing.s36,
        space40: spacing.s40,
        space48: spacing.s48,
        space64: spacing.s64,
    },

    elevation: {
        slight: elevation.slight,
    },

    typography: {
        family: {
            base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },
        size: {
            100: typography.size['100'],
            200: typography.size['200'],
            300: typography.size['300'],
            400: typography.size['400'],
            500: typography.size['500'],
            600: typography.size['600'],
            700: typography.size['700'],
            800: typography.size['800'],
            900: typography.size['900'],
        },

        lineHeight: {
            16: typography.lineHeight['16'],
            20: typography.lineHeight['20'],
            24: typography.lineHeight['24'],
            32: typography.lineHeight['32'],
            40: typography.lineHeight['40'],
            48: typography.lineHeight['48'],
            64: typography.lineHeight['64'],
        },

        weight: {
            400: typography.weight['400'],
            500: typography.weight['500'],
            700: typography.weight['700'],
        },
    },

    animation: {
        base: `0.2s ease`,
    },
};
