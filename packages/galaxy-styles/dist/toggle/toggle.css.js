import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
export const toggleWrapper = style({
    position: "relative",
    display: "inline-flex",
});
const toggleBase = style([
    dsPrimitives({
        background: vars.colors.fill.neutral.interactive.bold.default,
        border: `${vars.border.width["1"]} solid ${vars.colors.border.neutral.interactive.bold.default}`,
        borderRadius: vars.border.radius.full,
        position: "relative",
        cursor: "pointer",
        ":hover": {
            borderColor: vars.colors.border.neutral.interactive.bold.hover,
            background: vars.colors.fill.neutral.interactive.bold.hover,
        },
        ":active": {
            borderColor: vars.colors.border.neutral.interactive.bold.active,
            background: vars.colors.fill.neutral.interactive.bold.active,
        },
        selectors: {
            "&[data-disabled]": {
                borderColor: vars.colors.transparent.transparent,
                background: vars.colors.fill.neutral.static.inactive.subtle,
                cursor: "not-allowed",
            },
            '[data-state="checked"]&': {
                borderColor: vars.colors.transparent.transparent,
                background: vars.colors.fill.brand.interactive.bold.default,
            },
            '[data-state="checked"]&:hover': {
                borderColor: vars.colors.transparent.transparent,
                background: vars.colors.fill.brand.interactive.bold.hover,
            },
            '[data-state="checked"]&:active': {
                borderColor: vars.colors.transparent.transparent,
                background: vars.colors.fill.brand.interactive.bold.active,
            },
            '[data-state="checked"]&:disabled': {
                borderColor: vars.colors.transparent.transparent,
                background: vars.colors.fill.neutral.static.inactive.bold,
            },
        },
    }),
    transition("background-color"),
    focusRing(),
]);
const TOGGLE_SIZES = Object.freeze({
    SM: { width: vars.sizing["450"], height: vars.sizing["250"] },
    MD: { width: vars.sizing["550"], height: vars.sizing["300"] },
    LG: { width: vars.sizing["700"], height: vars.sizing["400"] },
});
export const toggle = recipe({
    base: toggleBase,
    variants: {
        size: {
            sm: dsPrimitives({
                width: TOGGLE_SIZES.SM.width,
                height: TOGGLE_SIZES.SM.height,
            }),
            md: dsPrimitives({
                width: TOGGLE_SIZES.MD.width,
                height: TOGGLE_SIZES.MD.height,
            }),
            lg: dsPrimitives({
                width: TOGGLE_SIZES.LG.width,
                height: TOGGLE_SIZES.LG.height,
            }),
        },
    },
    defaultVariants: {
        size: "sm",
    },
});
const TOGGLE_THUMB_SIZES = Object.freeze({
    SM: vars.sizing["200"],
    MD: vars.sizing["250"],
    LG: vars.sizing["300"],
});
const PARENT_BORDERS = Object.freeze({
    SM: "2px",
    MD: "2px",
    LG: "4px",
});
const OFFSET_X = "1px";
const getTranslateX = (width) => {
    const parentSize = TOGGLE_SIZES[width].width;
    const thumbSize = TOGGLE_THUMB_SIZES[width];
    const parentBorders = PARENT_BORDERS[width];
    return `translateX(calc(${parentSize} - ${thumbSize} - ${parentBorders} - ${OFFSET_X}))`;
};
export const toggleThumb = recipe({
    base: dsPrimitives({
        display: "block",
        backgroundColor: vars.colors.fill.neutral.static.default,
        borderRadius: vars.border.radius.full,
        transition: "transform 100ms",
    }),
    variants: {
        size: {
            sm: dsPrimitives({
                width: TOGGLE_THUMB_SIZES.SM,
                height: TOGGLE_THUMB_SIZES.SM,
                // This is the offset to have the same distance in both axis
                transform: `translateX(${OFFSET_X})`,
                selectors: {
                    '&[data-state="checked"]': {
                        transform: getTranslateX("SM"),
                    },
                },
            }),
            md: dsPrimitives({
                width: TOGGLE_THUMB_SIZES.MD,
                height: TOGGLE_THUMB_SIZES.MD,
                // This is the offset to have the same distance in both axis
                transform: `translateX(${OFFSET_X})`,
                selectors: {
                    '&[data-state="checked"]': {
                        transform: getTranslateX("MD"),
                    },
                },
            }),
            lg: dsPrimitives({
                width: TOGGLE_THUMB_SIZES.LG,
                height: TOGGLE_THUMB_SIZES.LG,
                // This is the offset to have the same distance in both axis
                transform: `translateX(${PARENT_BORDERS.LG})`,
                selectors: {
                    '&[data-state="checked"]': {
                        transform: getTranslateX("LG"),
                    },
                },
            }),
        },
    },
    defaultVariants: {
        size: "sm",
    },
});
