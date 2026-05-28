import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
export function iconButton(icon, size) {
    const sizeToken = {
        xs: vars.spacing.none,
        sm: `calc(${vars.spacing["2xs"]} - ${vars.border.width[1]})`,
        md: `calc(${vars.spacing["xs"]} - ${vars.border.width[1]})`,
        lg: `calc(${vars.spacing["sm"]} - ${vars.border.width[1]})`,
    }[size];
    const padding = {
        left: { paddingLeft: sizeToken },
        right: { paddingRight: sizeToken },
        single: { padding: sizeToken },
        both: {
            paddingLeft: sizeToken,
            paddingRight: sizeToken,
        },
    }[icon];
    return {
        variants: {
            size: size,
            icon: icon,
        },
        style: dsPrimitives({
            ...padding,
        }),
    };
}
