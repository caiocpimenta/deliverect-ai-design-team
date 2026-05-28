import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
import { chip, chipCommonActiveStyles, chipCommonDisabledStyles, chipCommonHoverStyles, chipDefaultVariants, chipIcon, chipIconVariants, chipSizeVariants, } from "./chip.css";
/**
 * Styles for the left-hand side icon of the action chip.
 */
export const actionChipIcon = chipIcon;
/**
 * Styles for the actual action chip.
 */
export const actionChip = recipe({
    base: dsComponents({
        ...chip,
        backgroundColor: vars.colors.fill.neutral.default.default,
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.default.active}`,
        cursor: "pointer",
    }),
    variants: {
        size: chipSizeVariants,
        leadingIcon: chipIconVariants,
        trailingIcon: chipIconVariants,
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
    },
    defaultVariants: chipDefaultVariants,
    // When there's a left-hand side Icon but no right-hand side icon, the regular
    // `paddingRight` values make the chip look a bit visually unbalanced on the right side.
    // To fix that we're adding just a little bit extra padding in those scenario.
    compoundVariants: [
        {
            variants: {
                size: "sm",
                leadingIcon: true,
                trailingIcon: false,
            },
            style: {
                paddingRight: vars.spacing.xs,
            },
        },
        {
            variants: {
                size: "md",
                leadingIcon: true,
                trailingIcon: false,
            },
            style: {
                paddingRight: vars.spacing.sm,
            },
        },
        {
            variants: {
                size: "lg",
                leadingIcon: true,
                trailingIcon: false,
            },
            style: {
                paddingRight: vars.spacing.sm,
            },
        },
    ],
});
