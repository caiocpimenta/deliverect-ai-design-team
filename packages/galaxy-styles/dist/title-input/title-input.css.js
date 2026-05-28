import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
const backgroundStyle = (color) => ({
    backgroundColor: color,
    boxShadow: `0 0 0 ${vars.spacing["050"]} ${color}`,
});
const statusVariants = {
    default: {},
    critical: dsPrimitives({
        color: vars.colors.text.critical.interactive.default,
        ...backgroundStyle(vars.colors.surface.critical.interactive.default),
        ":hover": backgroundStyle(vars.colors.surface.critical.interactive.hover),
        ":focus-visible": backgroundStyle(vars.colors.surface.critical.interactive.hover),
        "::placeholder": {
            color: vars.colors.text.critical.interactive.default,
        },
    }),
};
/** Styling for the container of the title input. */
export const titleInputContainer = style(dsPrimitives({
    position: "relative",
    display: "inline-block",
}));
/**
 * Styling for the hidden content of the title input.
 * This allows us to resize the input based on the content.
 */
export const titleInputHiddenContent = style(dsPrimitives({
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    whiteSpace: "pre",
}));
export const titleInput = recipe({
    base: dsPrimitives({
        display: "inline-block", // Ensure the element does not take the full width of its parent
        borderRadius: vars.border.radius["050"], // Figma uses `100`, but it looks more like the design with `050`
        outline: "none", // Override the default focus-visible outline
        ":hover": backgroundStyle(vars.colors.surface.neutral.interactive.subtle.hover),
        ":focus-visible": backgroundStyle(vars.colors.surface.neutral.interactive.subtle.hover),
    }),
    variants: {
        status: statusVariants,
    },
});
