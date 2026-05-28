import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
/**
 * Common subset of default variants of the chips and chip icons.
 */
export const chipDefaultVariants = {
    size: "md",
    disabled: false,
};
/**
 * Common styles shared across the various chips
 */
export const chip = {
    borderRadius: vars.border.radius["100"],
    display: "inline-flex",
    alignItems: "center",
    gap: vars.spacing["050"],
    color: vars.colors.text.neutral.interactive.default,
    fontWeight: vars.font.weight.regular,
};
/**
 * Values for the "size" variants shared across the various chips.
 */
export const chipSizeVariants = {
    sm: dsComponents({
        borderRadius: vars.border.radius["050"],
        fontSize: vars.font.size.sm,
        fontWeight: vars.font.weight.medium,
        lineHeight: `calc(${vars.font.lineHeight.md} - 2 * ${vars.border.width[1]})`,
        paddingBlock: vars.spacing["0"],
        paddingInline: `calc(${vars.spacing["050"]} - ${vars.border.width[1]})`,
    }),
    md: dsComponents({
        fontSize: vars.font.size.md,
        lineHeight: vars.font.lineHeight.md,
        paddingBlock: `calc(${vars.spacing["050"]} - ${vars.border.width[1]})`,
        paddingInline: `calc(${vars.spacing["100"]} - ${vars.border.width[1]})`,
    }),
    lg: dsComponents({
        fontSize: vars.font.size.md,
        lineHeight: vars.font.lineHeight.md,
        padding: `calc(${vars.spacing["100"]} - ${vars.border.width[1]})`,
    }),
};
/**
 * Values for the "icon" variants shared across the various chips.
 */
export const chipIconVariants = {
    true: {},
    false: {},
};
/**
 * Common styles shared across the chips when they're "disabled".
 */
export const chipCommonDisabledStyles = {
    color: vars.colors.text.neutral.static.inactive,
    backgroundColor: vars.colors.fill.neutral.static.inactive.subtle,
    outline: "none",
};
/**
 * Common styles shared across the chips when they're "hovered".
 */
export const chipCommonHoverStyles = {
    color: vars.colors.text.neutral.interactive.hover,
    backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
    border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.interactive.default.hover}`,
};
/**
 * Common styles shared across the chips when they're "active".
 */
export const chipCommonActiveStyles = {
    color: vars.colors.text.neutral.interactive.active,
    backgroundColor: vars.colors.fill.neutral.interactive.subtle.active,
    border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.interactive.default.active}`,
};
/**
 * Common styles shared across the icons of the various chips.
 */
export const commonChipIconStyles = {
    color: vars.colors.icon.neutral.static.default,
    fontSize: vars.font.size.xs,
    display: "inline-flex",
    alignItems: "center",
};
/**
 * Values for the "icon size" variants shared across the various chips.
 */
export const chipIconSizeVariants = {
    sm: dsComponents({ fontSize: vars.font.size.sm }),
    md: dsComponents({ fontSize: vars.font.size.md }),
    lg: dsComponents({ fontSize: vars.font.size.md }),
};
/**
 * Values for the "icon on an enabled/disabled chip" variants shared across the various chips.
 */
export const chipIconDisabledVariants = {
    true: dsComponents({ color: vars.colors.icon.neutral.static.inactive }),
    false: dsComponents({
        ":hover": {
            color: vars.colors.icon.neutral.interactive.bold.hover,
        },
        ":active": {
            color: vars.colors.icon.neutral.interactive.bold.active,
        },
    }),
};
/**
 * Styles for left-hand side icons of the chips (if applicable).
 */
export const chipIcon = recipe({
    base: dsComponents(commonChipIconStyles),
    variants: {
        size: chipIconSizeVariants,
        disabled: chipIconDisabledVariants,
    },
    defaultVariants: chipDefaultVariants,
});
