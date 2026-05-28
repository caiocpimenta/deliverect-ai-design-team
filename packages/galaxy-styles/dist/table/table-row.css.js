import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
import { vars } from "../tokens/theme.css";
const activeStyles = style(dsPrimitives({
    backgroundColor: vars.colors.surface.brand.interactive.default,
    ":hover": {
        backgroundColor: vars.colors.surface.brand.interactive.hover,
    },
    ":active": {
        backgroundColor: vars.colors.surface.brand.interactive.active,
    },
}));
export const tableRow = recipe({
    base: style([{}, transition("background-color")]),
    variants: {
        status: {
            default: dsPrimitives({
                backgroundColor: vars.colors.surface.neutral.interactive.subtle.default,
                ":hover": {
                    backgroundColor: vars.colors.surface.neutral.interactive.subtle.hover,
                },
                ":active": {
                    backgroundColor: vars.colors.surface.neutral.interactive.subtle.active,
                },
            }),
            primary: activeStyles,
            active: activeStyles,
            success: activeStyles,
            critical: dsPrimitives({
                backgroundColor: vars.colors.surface.critical.interactive.default,
                ":hover": {
                    backgroundColor: vars.colors.surface.critical.interactive.hover,
                },
                ":active": {
                    backgroundColor: vars.colors.surface.critical.interactive.active,
                },
            }),
        },
        sticky: {
            true: dsPrimitives({
                position: "sticky",
                top: 0,
                zIndex: vars.zIndexes.table.stickyRow,
                selectors: {
                    "[data-scrolled-vertically] &": dsPrimitives({
                        boxShadow: vars.shadows[1],
                    }),
                },
            }),
        },
    },
    defaultVariants: {
        status: "default",
    },
});
