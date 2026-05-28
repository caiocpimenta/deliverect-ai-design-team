import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
export const inputRoot = recipe({
    base: dsPrimitives({
        display: "inline-flex",
        flexDirection: "column",
        gap: vars.spacing["050"],
    }),
    variants: {
        width: {
            auto: dsPrimitives({ width: "auto" }),
            full: dsPrimitives({ width: "100%" }),
            fitContent: dsPrimitives({ width: "fit-content" }),
        },
    },
    defaultVariants: {
        width: "fitContent",
    },
});
