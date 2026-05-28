import { StyleRule } from "@vanilla-extract/css";
export declare const breakpoints: {
    readonly mobile: 0;
    readonly tabletPortrait: 577;
    readonly tabletLandscape: 769;
    readonly desktop: 1025;
};
export type Breakpoint = keyof typeof breakpoints;
/**
 * This function sets the values of a property for the submitted breakpoints.
 *
 * Eg.
 *   responsiveStyle({
 *     tabletLandscape: gapFn(vars.spacing.lg),
 *     desktop: gapFn(vars.spacing.xl)
 *   }),
 * @param breakpointStyles An object with a responsive breakpoint as key and the style to apply for that breakpoint as value
 * @returns A style rule with the right media queries applied to show the styles on different breakpoints
 */
export declare const responsiveStyle: (breakpointStyles: Partial<Record<Breakpoint, StyleRule>>) => StyleRule;
