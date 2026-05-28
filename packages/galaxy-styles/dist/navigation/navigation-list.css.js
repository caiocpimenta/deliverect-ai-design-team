import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
/** Styles for the navigation list. */
export const navigationList = recipe({
    variants: {
        variant: {
            default: dsComponents({
                gap: vars.spacing["050"],
                padding: `${vars.spacing["0"]} ${vars.spacing["100"]}`,
            }),
            sub: dsComponents({
                gap: "0.125rem",
                padding: vars.spacing["0"],
                marginLeft: vars.spacing["300"],
            }),
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
