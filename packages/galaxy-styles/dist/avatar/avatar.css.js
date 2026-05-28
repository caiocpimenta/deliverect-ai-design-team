import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
const commonBaseStyles = dsPrimitives({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 auto",
    overflow: "hidden",
    backgroundColor: vars.colors.fill.primary.success.default,
});
const commonSizeStyles = {
    xl: dsPrimitives({
        width: vars.sizing["500"],
        height: vars.sizing["500"],
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.md,
        fontWeight: vars.font.weight.medium,
    }),
    lg: dsPrimitives({
        width: vars.sizing["400"],
        height: vars.sizing["400"],
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.md,
        fontWeight: vars.font.weight.medium,
    }),
    md: dsPrimitives({
        width: vars.sizing["300"],
        height: vars.sizing["300"],
        fontSize: vars.font.size.xs,
        lineHeight: vars.font.lineHeight.sm,
        fontWeight: vars.font.weight.medium,
    }),
    sm: dsPrimitives({
        width: vars.sizing["250"],
        height: vars.sizing["250"],
        fontSize: vars.font.size.xs,
        lineHeight: vars.font.lineHeight.sm,
        fontWeight: vars.font.weight.medium,
    }),
};
const commonDefaultVariants = {
    variant: "circle",
    size: "md",
    border: "none",
};
export const avatar = recipe({
    base: commonBaseStyles,
    variants: {
        /**
         * Variant of the avatar, affects border-radius.
         */
        variant: {
            circle: dsPrimitives({
                borderRadius: vars.border.radius.full,
            }),
            square: dsPrimitives({
                borderRadius: vars.border.radius["100"],
            }),
        },
        /**
         * Size of the avatar.
         */
        size: commonSizeStyles,
        /**
         * Variant of the avatar's border.
         */
        border: {
            around: dsPrimitives({
                border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.weak.default}`,
            }),
            none: {},
        },
    },
    compoundVariants: [
        {
            style: dsPrimitives({ borderRadius: vars.border.radius["150"] }),
            variants: { size: "xl", variant: "square" },
        },
        {
            style: dsPrimitives({ borderRadius: vars.border.radius["075"] }),
            variants: { size: "sm", variant: "square" },
        },
    ],
    defaultVariants: commonDefaultVariants,
});
export const avatarFallback = style(dsPrimitives({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.fill.primary.success.default,
    color: vars.colors.text.neutral.text,
}));
export const avatarImage = style(dsPrimitives({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));
