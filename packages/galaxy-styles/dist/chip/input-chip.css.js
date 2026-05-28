import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
import { chip, chipCommonDisabledStyles, chipDefaultVariants, chipIcon, chipIconVariants, chipSizeVariants, commonChipIconStyles, } from "./chip.css";
/**
 * Styles for the "dismiss" button of the input chip (if applicable).
 * This is temporary - we should use an IconButton instead.
 * TODO https://deliverect.atlassian.net/browse/DLV-1123
 */
export const inputChipDismissButton = recipe({
    variants: {
        disabled: {
            false: {
                ":hover": {
                    backgroundColor: vars.colors.fill.transparent.default.hover,
                },
            },
        },
    },
});
/**
 * Styles for the "dismiss" icon of the input chip.
 */
export const inputChipDismissIcon = recipe({
    base: dsComponents(commonChipIconStyles),
    variants: {
        size: {
            sm: dsComponents({ fontSize: vars.font.size.xs }),
            md: dsComponents({ fontSize: vars.font.size.sm }),
            lg: dsComponents({ fontSize: vars.font.size.sm }),
        },
        disabled: {
            true: dsComponents({
                color: vars.colors.icon.neutral.inactive,
            }),
        },
    },
    defaultVariants: chipDefaultVariants,
});
/**
 * Styles for the left-hand side icon of the input chip.
 */
export const inputChipIcon = chipIcon;
/**
 * Styles for the actual input chip.
 */
export const inputChip = recipe({
    base: dsComponents({
        ...chip,
        backgroundColor: vars.colors.fill.neutral.strong.default,
        border: `${vars.border.width[1]} solid ${vars.colors.fill.neutral.strong.default}`,
    }),
    variants: {
        size: chipSizeVariants,
        icon: chipIconVariants,
        disabled: {
            false: dsComponents({
                ...focusRing(vars.colors.border.info.focus),
                ":hover": {
                    color: vars.colors.text.neutral.default.hover,
                    backgroundColor: vars.colors.fill.neutral.weak.active,
                    borderColor: vars.colors.fill.neutral.weak.active,
                },
                ":active": {
                    color: vars.colors.text.neutral.default.active,
                    backgroundColor: vars.colors.fill.neutral.strong.active,
                    borderColor: vars.colors.fill.neutral.strong.active,
                },
            }),
            true: dsComponents({ ...chipCommonDisabledStyles }),
        },
        dismissable: {
            true: {},
            false: {},
        },
    },
    defaultVariants: {
        ...chipDefaultVariants,
        dismissable: false,
    },
    // When there's a left-hand side Icon but no right-hand side icon, the regular
    // `paddingRight` values make the chip look a bit visually unbalanced on the right side.
    // To fix that we're adding just a little bit extra padding in those scenario.
    compoundVariants: [
        {
            variants: {
                size: "sm",
                icon: true,
                dismissable: false,
            },
            style: {
                paddingRight: vars.spacing["100"],
            },
        },
        {
            variants: {
                size: "md",
                icon: true,
                dismissable: false,
            },
            style: {
                paddingRight: vars.spacing["150"],
            },
        },
        {
            variants: {
                size: "lg",
                icon: true,
                dismissable: false,
            },
            style: {
                paddingRight: vars.spacing["150"],
            },
        },
    ],
});
