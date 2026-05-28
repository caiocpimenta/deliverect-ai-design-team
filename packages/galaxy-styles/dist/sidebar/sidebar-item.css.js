import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { transition } from "../util/transition";
import { dsComponents } from "../layers.css";
import { sidebarActionButton, sidebarButton } from "./sidebar-button.css";
export const sidebarItem = recipe({
    base: style([dsComponents(sidebarButton), transition("background-color")]),
    variants: {
        variant: {
            product: {},
            action: dsComponents(sidebarActionButton),
        },
        status: {
            default: {},
            inactive: dsComponents({
                color: vars.colors.icon.neutral.static.inactive,
            }),
            active: dsComponents({
                backgroundColor: vars.colors.fill.neutral.interactive.bold.default,
                boxShadow: vars.shadows[1],
            }),
        },
    },
    compoundVariants: [
        {
            variants: { variant: "product", status: "default" },
            style: dsComponents({
                color: vars.colors.marketing.dark_green,
                ":focus-visible": {
                    backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
                },
                ":hover": {
                    backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
                },
                ":active": {
                    color: vars.colors.marketing.dark_green, // Override the :active color from the Button component
                    backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
                },
            }),
        },
        {
            variants: { variant: "product", status: "active" },
            style: dsComponents({
                color: vars.colors.icon.neutral.static.inverse,
                backgroundColor: vars.colors.fill.success.interactive.bold.default,
                ":hover": {
                    backgroundColor: vars.colors.fill.success.interactive.bold.hover,
                },
                ":focus-visible": {
                    backgroundColor: vars.colors.fill.success.interactive.bold.hover,
                },
                ":active": {
                    color: vars.colors.icon.neutral.static.inverse, // Override the :active color from the Button component
                    backgroundColor: vars.colors.fill.success.interactive.bold.active,
                },
            }),
        },
    ],
    defaultVariants: {
        variant: "product",
        status: "default",
    },
});
