import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { dsPrimitives } from "../layers.css";
export const tableWrapper = recipe({
    base: dsPrimitives({
        overflow: "auto",
        whiteSpace: "nowrap",
    }),
    variants: {
        width: {
            auto: dsPrimitives({
                width: "fit-content",
            }),
            full: {},
        },
    },
    defaultVariants: {
        width: "auto",
    },
});
export const table = style(dsPrimitives({
    borderCollapse: "collapse",
    borderSpacing: 0,
    width: "100%",
}));
