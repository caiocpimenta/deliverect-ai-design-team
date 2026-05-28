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
export const icon = recipe({
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
                color: vars.colors.text.primary.default,
            }),
            neutral: dsPrimitives({
                color: vars.colors.icon.neutral.default.default,
            }),
            interactive: dsPrimitives({
                color: vars.colors.icon.info.default,
            }),
            critical: dsPrimitives({
                color: vars.colors.icon.critical.default,
            }),
            warning: dsPrimitives({
                color: vars.colors.icon.warning.default,
            }),
        },
    },
    defaultVariants: {
        size: "md",
        color: "inherit",
    },
});
/**
 * Using global styles to make sure we're targetting all svg elements used within Icon element.
 * The limitation to 'within Icon' is provided by using `base` in the selector.
 */
globalStyle(`.${base} > svg`, dsPrimitives({
    width: "100%",
    height: "100%",
}));
