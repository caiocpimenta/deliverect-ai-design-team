import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
const RADIO_GROUP_INDICATOR_SIZES = Object.freeze({
    SM: "0.5rem",
    MD: "0.5rem",
    LG: "0.75rem",
});
export const radioGroupIndicator = recipe({
    base: dsPrimitives({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        "::after": {
            content: '""',
            display: "block",
            borderRadius: "50%",
            backgroundColor: vars.colors.fill.neutral.default.default,
        },
    }),
    variants: {
        size: {
            sm: dsPrimitives({
                "::after": {
                    width: RADIO_GROUP_INDICATOR_SIZES.SM,
                    height: RADIO_GROUP_INDICATOR_SIZES.SM,
                },
            }),
            md: dsPrimitives({
                "::after": {
                    width: RADIO_GROUP_INDICATOR_SIZES.MD,
                    height: RADIO_GROUP_INDICATOR_SIZES.MD,
                },
            }),
            lg: dsPrimitives({
                "::after": {
                    width: RADIO_GROUP_INDICATOR_SIZES.LG,
                    height: RADIO_GROUP_INDICATOR_SIZES.LG,
                },
            }),
        },
    },
    defaultVariants: {
        size: "sm",
    },
});
