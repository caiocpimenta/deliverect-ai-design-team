import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getDefaultTextColors } from "../util/get-default-text-colors";
import { transition } from "../util/transition";
import { dsComponents } from "../layers.css";
import { vars } from "../tokens/theme.css";
export const dropdownMenuItemBasePaddingStyles = {
    padding: `${vars.spacing["100"]} ${vars.spacing["150"]}`,
};
export const dropdownMenuItemBase = style([
    dsComponents({
        display: "flex",
        alignItems: "center",
        gap: vars.spacing["100"],
        wordBreak: "break-word",
        backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
        padding: dropdownMenuItemBasePaddingStyles.padding,
        fontSize: vars.font.size.md,
        fontWeight: vars.font.weight.regular,
        lineHeight: vars.font.lineHeight.md,
        cursor: "pointer",
        outline: "none",
        selectors: {
            "[data-disabled]&, [data-disabled]&:hover, [data-disabled]&:active, [data-disabled]&:focus": {
                cursor: "not-allowed",
                color: vars.colors.text.neutral.static.inactive,
                backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
            },
        },
    }),
    transition("background-color"),
]);
export const dropdownMenuItem = recipe({
    base: dropdownMenuItemBase,
    variants: {
        status: {
            critical: dropdownMenuItemVariant("critical"),
            neutral: dropdownMenuItemVariant("neutral"),
        },
        justifyContent: {
            start: dsComponents({ justifyContent: "flex-start" }),
            between: dsComponents({ justifyContent: "space-between" }),
        },
    },
    defaultVariants: {
        status: "neutral",
        justifyContent: "start",
    },
});
function dropdownMenuItemVariant(status) {
    const textColors = getDefaultTextColors(status);
    return dsComponents({
        color: textColors.default,
        selectors: {
            "[data-highlighted]&": {
                backgroundColor: vars.colors.fill[status].interactive.subtle.hover,
                color: textColors.hover,
            },
            "[data-highlighted]&:active": {
                backgroundColor: vars.colors.fill[status].interactive.subtle.active,
                color: textColors.active,
            },
        },
    });
}
