import { dsUtilities } from "../layers.css";
/**
 * Stylerule helper to apply a transition animation to a proivded list of CSS properties
 *
 * @param properties The CSS properties to apply the transition to
 * @returns The stylerule to apply the animation
 */
export const transition = (properties) => dsUtilities({
    transitionProperty: properties,
    transitionTimingFunction: "ease",
    transitionDuration: "0.3s",
});
