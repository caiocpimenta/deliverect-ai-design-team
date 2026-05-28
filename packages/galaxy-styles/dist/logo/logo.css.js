import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { mapSpacing } from "../util/spacing";
import { dsPrimitives } from "../layers.css";
const base = style(dsPrimitives({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "inherit",
    flex: "0 0 auto",
}));
export const logo = recipe({
    base,
    variants: {
        size: mapSpacing(variable => dsPrimitives({
            width: variable,
            height: variable,
        })),
        color: {
            inherit: dsPrimitives({
                color: "inherit",
            }),
            primary: dsPrimitives({
                color: vars.colors.marketing.dark_green, // Logos should use brand colors
            }),
            inverse: dsPrimitives({
                color: vars.colors.icon.neutral.inverse,
            }),
        },
    },
    defaultVariants: { size: "lg", color: "primary" },
});
/**
 * Using global styles to make sure we're targetting all svg elements used within Logo element.
 * The limitation to 'within Logo' is provided by using `base` in the selector.
 */
globalStyle(`.${base} > svg`, dsPrimitives({
    width: "100%",
    height: "100%",
}));
