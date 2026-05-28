import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { transition } from "../util/transition";
import { dsComponents } from "../layers.css";
export const navigationRoot = recipe({
    base: dsComponents({
        width: "240px",
        padding: `${vars.spacing["300"]} ${vars.spacing["0"]}`,
        backgroundColor: vars.colors.background.nav,
        // Add a left border if we are in a different environment.
        borderLeft: "5px solid transparent",
        ...transition("transform"), // TODO [DLV-1262] Open and close styling
    }),
    variants: {
        environment: {
            production: dsComponents({
                border: "none",
            }),
            staging: dsComponents({
                borderLeftColor: vars.colors.fill.warning.default.default,
            }),
            testing: dsComponents({
                borderLeftColor: vars.colors.fill.info.default.default,
            }),
            development: dsComponents({
                borderLeftColor: vars.colors.fill.info.default.default,
            }),
            local: dsComponents({
                borderLeftColor: vars.colors.fill.primary.default.default,
            }),
        },
    },
    defaultVariants: {
        environment: "production",
    },
});
