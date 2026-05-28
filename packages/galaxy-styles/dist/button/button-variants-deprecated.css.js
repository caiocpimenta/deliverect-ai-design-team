import { vars } from "../tokens";
import { getDefaultBorderColors } from "../util/get-default-border-colors";
import { getDefaultTextColors } from "../util/get-default-text-colors";
import { dsPrimitives } from "../layers.css";
/** Styles used for a disabled button. */
const disabledStyles = {
    color: vars.colors.text.neutral.static.inactive,
    borderColor: vars.colors.border.neutral.static.inactive,
    backgroundColor: vars.colors.fill.neutral.static.inactive.subtle,
    cursor: "not-allowed",
};
export function oldFilledButton(status) {
    const hoverStyles = { backgroundColor: vars.colors.fill[status].default.hover };
    return {
        variants: { status, variant: "filled" },
        style: dsPrimitives({
            backgroundColor: vars.colors.fill[status].default.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": { backgroundColor: vars.colors.fill[status].default.active },
            ":disabled": disabledStyles,
        }),
    };
}
export function oldOutlineButton(status) {
    const textColors = getDefaultTextColors(status);
    const borderColors = getDefaultBorderColors(status);
    const hoverStyles = {
        borderColor: borderColors.hover,
        color: textColors.hover,
        backgroundColor: vars.colors.fill[status].weak.hover,
    };
    return {
        variants: { status, variant: "outline" },
        style: dsPrimitives({
            borderColor: borderColors.default,
            color: textColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                borderColor: borderColors.active,
                color: textColors.active,
                backgroundColor: vars.colors.fill[status].weak.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
export function oldGhostButton(status) {
    const textColors = getDefaultTextColors(status);
    const hoverStyles = {
        color: textColors.hover,
        backgroundColor: vars.colors.fill[status].weak.hover,
    };
    return {
        variants: { status, variant: "ghost" },
        style: dsPrimitives({
            color: textColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                color: textColors.active,
                backgroundColor: vars.colors.fill[status].weak.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
/** @deprecated This version will no longer be used at all. */
export function subtleButton(status) {
    const textColors = getDefaultTextColors(status);
    const hoverStyles = {
        color: textColors.hover,
        backgroundColor: vars.colors.fill[status].weak.hover,
    };
    return {
        variants: { status, variant: "subtle" },
        style: dsPrimitives({
            color: textColors.default,
            backgroundColor: vars.colors.fill[status].weak.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                color: textColors.active,
                backgroundColor: vars.colors.fill[status].weak.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
