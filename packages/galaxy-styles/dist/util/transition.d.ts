import { StyleRule } from "@vanilla-extract/css";
/**
 * Stylerule helper to apply a transition animation to a proivded list of CSS properties
 *
 * @param properties The CSS properties to apply the transition to
 * @returns The stylerule to apply the animation
 */
export declare const transition: (properties: string) => StyleRule;
