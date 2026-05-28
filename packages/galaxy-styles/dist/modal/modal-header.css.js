import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const modalHeader = style([
    dsComponents({
        position: "relative",
        top: 0,
        backgroundColor: vars.colors.surface.neutral.default,
        borderTopLeftRadius: vars.border.radius["100"],
        borderTopRightRadius: vars.border.radius["100"],
        selectors: {
            '[data-scrolled-vertically="true"] &': dsComponents({
                boxShadow: vars.shadows[1],
            }),
        },
    }),
]);
