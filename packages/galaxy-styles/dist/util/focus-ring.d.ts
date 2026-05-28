import { StyleRule } from "@vanilla-extract/css";
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
export declare const focusRing: (color?: string) => StyleRule;
