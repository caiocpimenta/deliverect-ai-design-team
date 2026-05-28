import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const sidebarWrapper = style([
    dsComponents({
        backgroundColor: vars.colors.fill.neutral.interactive.bold.default,
    }),
]);
