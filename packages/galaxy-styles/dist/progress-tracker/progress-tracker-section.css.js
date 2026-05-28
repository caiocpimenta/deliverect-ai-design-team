import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents, dsPrimitives } from "../layers.css";
export const progressTrackerSection = style(dsComponents({
    backgroundColor: vars.colors.background.nav,
    height: "100%",
    flex: "1 1 0%",
}));
export const progressTrackerIndicator = recipe({
    base: dsPrimitives({
        background: vars.colors.marketing.dark_green,
        height: "100%",
    }),
    variants: {
        status: {
            empty: dsPrimitives({
                width: 0,
            }),
            "in-progress": dsPrimitives({
                width: "50%",
            }),
            done: dsPrimitives({
                width: "100%",
            }),
        },
    },
    defaultVariants: {
        status: "empty",
    },
});
