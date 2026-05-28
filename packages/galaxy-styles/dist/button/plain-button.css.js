import { vars } from "../tokens";
import { getDefaultTextColors } from "../util/get-default-text-colors";
import { dsPrimitives } from "../layers.css";
export function plainButtonSize(size) {
    return {
        variants: { variant: "plain", size },
        style: dsPrimitives({
            height: "inherit",
            padding: 0,
        }),
    };
}
export function plainButtonStatus(status) {
    const textColors = status === "primary"
        ? vars.colors.text.brand.interactive
        : getDefaultTextColors(status);
    return {
        variants: { variant: "plain", status },
        style: dsPrimitives({
            color: textColors.default,
            ":active": {
                color: textColors.active,
            },
            ":disabled": {
                color: vars.colors.text.neutral.static.inactive,
                textDecoration: "none",
            },
        }),
    };
}
