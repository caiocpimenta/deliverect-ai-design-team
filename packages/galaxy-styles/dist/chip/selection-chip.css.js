import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
import { chip, chipCommonActiveStyles, chipCommonDisabledStyles, chipCommonHoverStyles, chipDefaultVariants, chipIconDisabledVariants, chipIconSizeVariants, chipIconVariants, chipSizeVariants, commonChipIconStyles, } from "./chip.css";
/**
 * Styles for the left-hand side icon of selection chip.
 */
export const selectionChipIcon = recipe({
    base: dsComponents(commonChipIconStyles),
    variants: {
        size: chipIconSizeVariants,
        disabled: chipIconDisabledVariants,
        selected: {
            true: dsComponents({
                color: vars.colors.icon.neutral.inverse,
                ":hover": {
                    color: vars.colors.icon.neutral.inverse,
                },
                ":active": {
                    color: vars.colors.icon.neutral.inverse,
                },
            }),
        },
    },
    defaultVariants: {
        ...chipDefaultVariants,
        selected: false,
    },
});
/**
 * Styles for the actual selection chip.
 */
export const selectionChip = recipe({
    base: dsComponents({
        ...chip,
        backgroundColor: vars.colors.fill.neutral.default.default,
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.default.default}`,
        cursor: "pointer",
    }),
    variants: {
        size: chipSizeVariants,
        icon: chipIconVariants,
        disabled: {
            false: dsComponents({
                ...focusRing(vars.colors.border.info.focus),
                ":hover": chipCommonHoverStyles,
                ":active": chipCommonActiveStyles,
            }),
            true: dsComponents({
                ...chipCommonDisabledStyles,
                border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.inactive}`,
                cursor: "not-allowed",
            }),
        },
        selected: {
            true: dsComponents({
                color: vars.colors.text.neutral.textInverse,
                backgroundColor: vars.colors.fill.neutral.inverse.default,
                borderColor: vars.colors.transparent.transparent,
                ":hover": {
                    color: vars.colors.text.neutral.textInverse,
                    backgroundColor: vars.colors.fill.neutral.inverse.hover,
                    borderColor: vars.colors.transparent.transparent,
                },
                ":active": {
                    color: vars.colors.text.neutral.textInverse,
                    backgroundColor: vars.colors.fill.neutral.inverse.active,
                    borderColor: vars.colors.transparent.transparent,
                },
            }),
        },
    },
    defaultVariants: {
        ...chipDefaultVariants,
        selected: false,
    },
    // When there's a left-hand side Icon, the regular `paddingRight`
    // values make the chip look a bit visually unbalanced on the right side.
    // To fix that we're adding just a little bit extra padding in those scenario.
    compoundVariants: [
        {
            variants: {
                size: "sm",
                icon: true,
            },
            style: {
                paddingRight: vars.spacing["100"],
            },
        },
        {
            variants: {
                size: "md",
                icon: true,
            },
            style: {
                paddingRight: vars.spacing["150"],
            },
        },
        {
            variants: {
                size: "lg",
                icon: true,
            },
            style: {
                paddingRight: vars.spacing["150"],
            },
        },
    ],
});
