import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const radioGroupWrapper = style({
    position: "relative",
    display: "inline-flex",
});
export const radioGroupRoot = recipe({
    base: dsComponents({
        display: "flex",
        gap: vars.spacing["100"],
    }),
    variants: {
        orientation: {
            horizontal: dsComponents({
                flexDirection: "row",
            }),
            vertical: dsComponents({
                flexDirection: "column",
            }),
        },
    },
    defaultVariants: {
        orientation: "vertical",
    },
});
