import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing, textUnderlineStyles } from "../util";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
const baseLink = style(dsPrimitives({
    display: "inline-flex",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    borderRadius: vars.border.radius["050"],
    lineHeight: vars.font.lineHeight.md,
    color: vars.colors.text.info.interactive.default,
    ...textUnderlineStyles(),
    ":hover": {
        color: vars.colors.text.info.interactive.hover,
    },
    ":active": {
        color: vars.colors.text.info.interactive.active,
    },
    ...focusRing(),
}));
export const link = recipe({
    base: [baseLink, transition("color")],
    variants: {
        size: {
            xs: dsPrimitives({
                fontSize: vars.font.size.xs,
                lineHeight: vars.font.lineHeight.sm,
            }),
            sm: dsPrimitives({ fontSize: vars.font.size.sm }),
            md: dsPrimitives({ fontSize: vars.font.size.md }),
        },
    },
    defaultVariants: {
        size: "md",
    },
});
