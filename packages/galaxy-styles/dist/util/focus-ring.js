import { vars } from "../tokens";
/**
 * Helper to add consistent focus ring (highlighted border) around elements.
 * Using `:focus-visible` instead of `:focus`.
 * To read more https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
 *
 * Should help with browser compatibility.
 *
 * @param color Color of the focus ring
 *
 * @returns A stylerule
 */
export const focusRing = (color = vars.colors.border.info.interactive.focus) => ({
    ":focus-visible": {
        boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px, ${color} 0px 0px 0px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
        outline: "none",
    },
});
