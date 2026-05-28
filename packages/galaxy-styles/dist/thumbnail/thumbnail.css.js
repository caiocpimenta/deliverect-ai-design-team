import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
const sizeStyles = {
    sm: dsComponents({
        width: vars.spacing["250"],
        height: vars.spacing["250"],
        borderRadius: vars.border.radius["075"],
    }),
    md: dsComponents({
        width: vars.spacing["300"],
        height: vars.spacing["300"],
        borderRadius: vars.border.radius["100"],
    }),
    lg: dsComponents({
        width: vars.spacing["400"],
        height: vars.spacing["400"],
        borderRadius: vars.border.radius["100"],
    }),
    xl: dsComponents({
        width: vars.spacing["500"],
        height: vars.spacing["500"],
        borderRadius: vars.border.radius["150"],
    }),
};
export const thumbnail = recipe({
    base: dsComponents({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Ensure the corners of the image are rounded
        backgroundColor: vars.colors.surface.neutral.static.bold,
    }),
    variants: {
        size: sizeStyles,
    },
    defaultVariants: {
        size: "md",
    },
});
/** Style to pass to the image within the thumbnail. */
export const thumbnailImage = style(dsComponents({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));
