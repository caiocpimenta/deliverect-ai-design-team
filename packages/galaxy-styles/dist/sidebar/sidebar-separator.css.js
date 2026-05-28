import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const sidebarSeparator = style([
    dsComponents({
        height: vars.border.width[1],
        width: "100%",
        backgroundColor: vars.colors.border.neutral.interactive.default.default,
    }),
]);
