import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
const bottomSlideIn = keyframes({
    "0%": { transform: `translateY(calc(100% + ${vars.spacing["300"]}))` },
    "100%": { transform: "translate(0)" },
});
const bottomSlideOut = keyframes({
    "0%": { transform: "translateY(0)" },
    "100%": { transform: `translateY(calc(100% + ${vars.spacing["500"]}))` },
});
export const actionPanelRoot = style(dsComponents({
    backgroundColor: vars.colors.surface.neutral.interactive.subtle.default,
    borderRadius: vars.border.radius["150"],
    border: `1px solid ${vars.colors.border.neutral.static.default}`,
    boxShadow: vars.shadows[2],
    padding: `${vars.spacing["200"]} ${vars.spacing["250"]}`,
    display: "flex",
    alignItems: "center",
    selectors: {
        "[data-state=open]&": {
            animation: `${bottomSlideIn} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
        },
        "[data-state=closed]&": {
            animation: `${bottomSlideOut} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
        },
    },
}));
