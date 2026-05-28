import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
export const card = recipe({
    base: dsPrimitives({
        overflow: "hidden",
        backgroundColor: vars.colors.surface.neutral.static.subtle,
    }),
    variants: {
        /**
         * The border of the card
         */
        border: {
            none: dsPrimitives({ border: "none" }),
            neutral: dsPrimitives({
                border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.static.default}`,
            }),
            critical: dsPrimitives({
                border: `${vars.border.width[1]} solid ${vars.colors.border.critical.static.bold}`,
            }),
        },
        /**
         * The height of the card
         */
        height: {
            full: dsPrimitives({ height: "100%" }),
        },
    },
    defaultVariants: {
        border: "neutral",
    },
});
