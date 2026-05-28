import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
/** Styles for the navigation item wrapper. */
export const navigationItemWrapper = style([dsComponents({ gap: "0.125rem" })]);
/** Styles that apply to all states and variants. */
const commonBaseStyles = style(dsComponents({
    borderRadius: vars.border.radius["100"],
    fontWeight: vars.font.weight.medium,
    textDecoration: "none",
    cursor: "pointer",
    backgroundColor: vars.colors.surface.neutral.interactive.default.default,
    color: vars.colors.text.neutral.interactive.default,
    ":hover": {
        backgroundColor: vars.colors.fill.neutral.interactive.bold.hover,
        color: vars.colors.text.neutral.interactive.hover,
    },
    ":active": {
        backgroundColor: vars.colors.fill.neutral.interactive.bold.active,
        color: vars.colors.text.neutral.interactive.active,
    },
    selectors: {
        "&[data-active]": {
            cursor: "default",
            backgroundColor: vars.colors.fill.neutral.static.default,
            color: vars.colors.text.neutral.static.primary,
            boxShadow: vars.shadows[1],
        },
        "&[data-active]:focus-visible": {
            // Explicitly define the box shadow so the focus ring is not overwritten by the default [data-active] one.
            boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px, ${vars.colors.border.info.focus} 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
        },
    },
    ...focusRing(),
}));
/** Styles that apply to default items. */
export const navigationItem = recipe({
    base: commonBaseStyles,
    variants: {
        variant: {
            default: dsComponents({
                padding: `${vars.spacing["075"]} ${vars.spacing["100"]}`,
            }),
            sub: dsComponents({
                padding: `${vars.spacing["075"]} ${vars.spacing["150"]}`,
            }),
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const navigationLabel = style([
    dsComponents({
        color: vars.colors.text.neutral.interactive.default,
        selectors: {
            [`${commonBaseStyles}:hover &`]: {
                color: vars.colors.text.neutral.interactive.hover,
            },
            [`${commonBaseStyles}:active &`]: {
                color: vars.colors.text.neutral.interactive.active,
            },
            [`${commonBaseStyles}[data-active] &`]: {
                color: vars.colors.text.neutral.static.primary,
            },
        },
    }),
]);
