import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing, hoverPointer } from "../util";
import { transition } from "../util/transition";
import { dsComponents } from "../layers.css";
const radioGroupItemBase = style([
    dsComponents({
        backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
        marginRight: vars.spacing["100"],
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: vars.border.radius.full,
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.interactive.bold.default}`,
        flexShrink: 0,
        ":hover": {
            cursor: "pointer",
            backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
            borderColor: vars.colors.border.neutral.interactive.bold.hover,
        },
        ":active": {
            backgroundColor: vars.colors.fill.neutral.interactive.subtle.active,
            borderColor: vars.colors.border.neutral.interactive.bold.active,
        },
        selectors: {
            '[data-state="checked"]&': {
                background: vars.colors.fill.brand.interactive.bold.default,
                borderColor: vars.colors.fill.brand.interactive.bold.default,
            },
            '[data-state="checked"]&:hover': {
                background: vars.colors.fill.brand.interactive.bold.hover,
                borderColor: vars.colors.fill.brand.interactive.bold.hover,
            },
            '[data-state="checked"]&:active': {
                background: vars.colors.fill.brand.interactive.bold.active,
                borderColor: vars.colors.fill.brand.interactive.bold.active,
            },
            '[data-state="checked"]&:disabled': {
                background: vars.colors.fill.neutral.static.inactive.subtle,
                borderColor: vars.colors.border.neutral.static.inactive,
            },
            "&[data-disabled]": {
                background: vars.colors.fill.neutral.static.inactive.subtle,
                borderColor: vars.colors.border.neutral.static.inactive,
                cursor: "not-allowed",
            },
        },
    }),
    transition("background-color"),
    focusRing(),
]);
const RADIO_GROUP_ITEM_SIZES = Object.freeze({
    SM: "1.25rem",
    MD: vars.sizing["300"],
    LG: vars.sizing["400"],
});
export const radioGroupItem = recipe({
    base: radioGroupItemBase,
    variants: {
        size: {
            sm: dsComponents({
                width: RADIO_GROUP_ITEM_SIZES.SM,
                height: RADIO_GROUP_ITEM_SIZES.SM,
            }),
            md: dsComponents({
                width: RADIO_GROUP_ITEM_SIZES.MD,
                height: RADIO_GROUP_ITEM_SIZES.MD,
            }),
            lg: dsComponents({
                width: RADIO_GROUP_ITEM_SIZES.LG,
                height: RADIO_GROUP_ITEM_SIZES.LG,
            }),
        },
        standalone: {
            true: dsComponents({
                marginRight: 0,
            }),
        },
    },
    defaultVariants: {
        size: "sm",
        standalone: false,
    },
});
export const labelHover = style(hoverPointer());
