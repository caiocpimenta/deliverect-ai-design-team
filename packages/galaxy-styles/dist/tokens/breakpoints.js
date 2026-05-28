export const breakpoints = {
    mobile: 0,
    tabletPortrait: 577,
    tabletLandscape: 769,
    desktop: 1025,
};
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
export const responsiveStyle = (breakpointStyles) => ({
    "@media": Object.keys(breakpointStyles).reduce((queries, breakpoint) => ({
        ...queries,
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: breakpointStyles[breakpoint],
    }), {}),
});
