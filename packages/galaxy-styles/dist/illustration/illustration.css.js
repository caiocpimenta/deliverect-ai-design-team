import { recipe } from "@vanilla-extract/recipes";
import { dsPrimitives } from "../layers.css";
export const illustration = recipe({
    variants: {
        size: {
            sm: dsPrimitives({
                width: "3rem",
                height: "3rem",
            }),
            md: dsPrimitives({
                width: "4rem",
                height: "4rem",
            }),
            lg: dsPrimitives({
                width: "5rem",
                height: "5rem",
            }),
        },
    },
    defaultVariants: {
        size: "md",
    },
});
