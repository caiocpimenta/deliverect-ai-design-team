import { vars } from "../tokens";
import { getDefaultTextColors } from "../util/get-default-text-colors";
import { dsPrimitives } from "../layers.css";
/** Styles used for a disabled button. */
const disabledStyles = {
    color: vars.colors.text.neutral.static.inactive,
    borderColor: vars.colors.border.neutral.static.inactive,
    backgroundColor: vars.colors.fill.neutral.static.inactive.subtle,
    cursor: "not-allowed",
};
export function transparentButton(status) {
    const textColors = status === "primary"
        ? vars.colors.text.brand.interactive
        : getDefaultTextColors(status);
    const backgroundColors = vars.colors.fill.transparent.interactive.default;
    const hoverStyles = {
        color: textColors.hover,
        backgroundColor: backgroundColors.hover,
    };
    return {
        variants: { status, variant: "transparent" },
        style: dsPrimitives({
            color: textColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                color: textColors.active,
                backgroundColor: backgroundColors.active,
            },
            ":disabled": {
                color: vars.colors.text.neutral.static.inactive,
                backgroundColor: vars.colors.fill.transparent.interactive.default.default,
            },
        }),
    };
}
/**
 * Button that represents the primary action.
 *
 * TODO [DLV-1437] Rename the "filled" button type variant to "primary".
 * The primary button will be the default button style,
 * only accepting "default" and "critical" as status.
 */
export function primaryButton(status) {
    const colorFamily = status === "default" ? "brand" : "critical";
    const oldStatus = status === "default" ? "primary" : "critical"; // TODO [DLV-1437] Remove this
    const backgroundColors = vars.colors.fill[colorFamily].interactive.bold;
    const hoverStyles = {
        backgroundColor: backgroundColors.hover,
    };
    return {
        variants: { status: oldStatus, variant: "filled" },
        style: dsPrimitives({
            backgroundColor: backgroundColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                backgroundColor: backgroundColors.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
/**
 * Button that represents the secondary action.
 *
 * TODO [DLV-1437] Rename the "outline" button type variant to "secondary".
 * The secondary button will only accept "default" and "critical" as status.
 * The secondary critical button will be a ghost button.
 */
export function secondaryButton(status) {
    const colorFamily = status === "default" ? "neutral" : "critical";
    const oldStatus = status === "default" ? "primary" : "critical"; // TODO [DLV-1437] Remove this
    const borderColors = status === "default"
        ? vars.colors.border.neutral.interactive.bold
        : vars.colors.border.critical.interactive;
    const textColors = vars.colors.text[colorFamily].interactive;
    const backgroundColors = vars.colors.fill[colorFamily].interactive.subtle;
    const hoverStyles = {
        borderColor: borderColors.hover,
        color: textColors.hover,
        backgroundColor: backgroundColors.hover,
    };
    return {
        variants: { status: oldStatus, variant: "outline" },
        style: dsPrimitives({
            borderColor: borderColors.default,
            color: textColors.default,
            backgroundColor: backgroundColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                borderColor: borderColors.active,
                color: textColors.active,
                backgroundColor: backgroundColors.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
/**
 * Button that represents the tertiary action.
 *
 * TODO [DLV-1437] Rename the "ghost" button type variant to "tertiary".
 * The tertiary button will exist with "default" as status.
 * The tertiary critical button does not exist.
 */
export function tertiaryButton(status) {
    const colorFamily = status === "default" ? "brand" : "critical";
    const oldStatus = status === "default" ? "primary" : "critical"; // TODO [DLV-1437] Remove this
    const textColors = vars.colors.text[colorFamily].interactive;
    const backgroundColors = vars.colors.fill[colorFamily].interactive.subtle;
    const hoverStyles = {
        color: textColors.hover,
        backgroundColor: backgroundColors.hover,
    };
    return {
        variants: { status: oldStatus, variant: "ghost" },
        style: dsPrimitives({
            color: textColors.default,
            ":focus-visible": hoverStyles,
            ":hover": hoverStyles,
            ":active": {
                color: textColors.active,
                backgroundColor: backgroundColors.active,
            },
            ":disabled": disabledStyles,
        }),
    };
}
