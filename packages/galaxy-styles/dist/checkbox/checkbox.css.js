import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
export const checkboxWrapper = style({
    position: "relative",
    display: "inline-flex",
});
const checkboxBase = style([
    dsPrimitives({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: vars.border.radius["050"],
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.interactive.bold.default}`,
        background: vars.colors.fill.neutral.interactive.subtle.default,
        cursor: "pointer",
        color: vars.colors.icon.neutral.static.inverse,
        padding: 0,
        ":hover": {
            borderColor: vars.colors.border.neutral.interactive.bold.hover,
            background: vars.colors.fill.neutral.interactive.subtle.hover,
        },
        ":active": {
            borderColor: vars.colors.border.neutral.interactive.bold.active,
            background: vars.colors.fill.neutral.interactive.subtle.active,
        },
        ":disabled": {
            border: "none",
            background: vars.colors.fill.neutral.static.inactive.subtle,
            cursor: "not-allowed",
            pointerEvents: "none",
        },
        selectors: {
            '[data-state="checked"]&, [data-state="indeterminate"]&': {
                background: vars.colors.fill.brand.interactive.bold.default,
                border: "none",
            },
            '[data-state="checked"]&:disabled, [data-state="indeterminate"]&:disabled': {
                border: "none",
                background: vars.colors.fill.neutral.static.inactive.bold,
                color: vars.colors.text.neutral.static.inactive,
                cursor: "not-allowed",
                pointerEvents: "none",
            },
            '[data-state="checked"]&:hover, [data-state="indeterminate"]&:hover': {
                background: vars.colors.fill.brand.interactive.bold.hover,
                border: "none",
            },
            '[data-state="checked"]&:active, [data-state="indeterminate"]&:active': {
                background: vars.colors.fill.brand.interactive.bold.active,
                border: "none",
            },
        },
    }),
    transition("background-color"),
    focusRing(),
]);
export const checkbox = recipe({
    base: checkboxBase,
    variants: {
        size: {
            sm: dsPrimitives({
                width: vars.spacing["250"],
                height: vars.spacing["250"],
            }),
            md: dsPrimitives({
                width: vars.spacing["300"],
                height: vars.spacing["300"],
            }),
            lg: dsPrimitives({
                width: vars.spacing["400"],
                height: vars.spacing["400"],
                borderRadius: vars.border.radius["100"],
            }),
        },
    },
    defaultVariants: {
        size: "sm",
    },
});
export const checkboxIcon = style([
    dsPrimitives({
        width: "100%",
        height: "100%",
    }),
]);
