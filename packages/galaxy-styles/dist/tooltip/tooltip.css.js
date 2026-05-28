import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
const commonBaseStyles = dsPrimitives({
    borderRadius: vars.border.radius["100"],
    backgroundColor: vars.colors.fill.neutral.inverse.default,
    fontWeight: vars.font.weight.regular,
    color: vars.colors.text.neutral.textInverse,
    boxShadow: vars.shadows[2],
});
export const tooltip = recipe({
    base: commonBaseStyles,
    variants: {
        size: {
            sm: dsPrimitives({
                paddingBlock: vars.spacing["050"],
                paddingInline: vars.spacing["100"],
                fontSize: vars.font.size.sm,
                lineHeight: vars.font.lineHeight.md,
            }),
            md: dsPrimitives({
                padding: vars.spacing["050"],
                fontSize: vars.font.size.md,
                lineHeight: vars.font.lineHeight.md,
            }),
        },
    },
    defaultVariants: {
        size: "sm",
    },
});
