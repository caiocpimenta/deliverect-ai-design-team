import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const modalFooter = style([
    dsComponents({
        position: "relative",
        bottom: 0,
        backgroundColor: vars.colors.surface.neutral.default,
        borderBottomLeftRadius: vars.border.radius["100"],
        borderBottomRightRadius: vars.border.radius["100"],
        selectors: {
            '[data-scrollable-vertically="true"]:not([data-max-scrolled-vertically="true"]) &': dsComponents({
                backgroundColor: vars.colors.surface.neutral.default,
                borderBottomLeftRadius: vars.border.radius["100"],
                boxShadow: vars.shadows["1-inverted"],
            }),
        },
    }),
]);
