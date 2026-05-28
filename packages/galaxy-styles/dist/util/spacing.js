import { spacing, vars } from "../tokens";
/**
 * This function returns a function with the following signature:
 *   (variable: string) => StyleRule
 * Applied to the layer it received as param.
 *
 * @param StyleRuleFn The desired layer to apply the gap
 * @returns The StyleRuleFn with the gap styles for the submitted layer
 */
export const gap = (layer) => (variable) => layer({
    gap: variable,
});
/**
 * This function expects a function with the following signature:
 *   (variable: string) => StyleRule
 *   eg.
 *   {
 *     "xs": {
 *       padding-left: 0.5rem;
 *     },
 *     "sm": {...},
 *     ...,
 *   }
 *
 * @param fn The StyleRuleFn with the properties to apply to the spacing values
 * @returns  An object with all the spacing options as props with the submitted StyleRule as prop key and the spacing as value.
 */
export const mapSpacing = (fn) => Object.keys(spacing).reduce((map, spacingKey) => {
    return {
        ...map,
        [spacingKey]: fn(vars.spacing[spacingKey]),
    };
}, {});
