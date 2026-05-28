import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
export const sharedStyles = style({
    backgroundColor: vars.colors.transparent.transparent,
    borderRadius: vars.border.radius["100"],
    color: vars.colors.text.neutral.default.default,
    ":hover": {
        cursor: "pointer",
        backgroundColor: vars.colors.fill.neutral.strong.default,
        color: vars.colors.text.neutral.default.hover,
    },
    ":disabled": {
        cursor: "not-allowed",
        backgroundColor: vars.colors.transparent.transparent,
        color: vars.colors.text.neutral.secondary,
    },
    selectors: {
        "&[data-state='active']": {
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: vars.colors.fill.neutral.strong.default,
            color: vars.colors.text.neutral.default.active,
        },
        "&[data-state='active']:active": {
            backgroundColor: vars.colors.fill.neutral.strong.active,
        },
        "&[data-state='active']:hover": {
            color: vars.colors.text.neutral.default.hover,
        },
    },
});
