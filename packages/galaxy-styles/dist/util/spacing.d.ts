import { StyleRule } from "@vanilla-extract/css";
type SpacingProperties = "gap" | "padding" | "margin";
/**
 * This function returns a function with the following signature:
 *   (variable: string) => StyleRule
 * Applied to the layer it received as param.
 *
 * @param StyleRuleFn The desired layer to apply the gap
 * @returns The StyleRuleFn with the gap styles for the submitted layer
 */
export declare const gap: (layer: (rule: StyleRule) => StyleRule) => (variable: string) => StyleRule;
type StyleRuleFn = ReturnType<typeof gap>;
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
export declare const mapSpacing: <T extends SpacingProperties>(fn: StyleRuleFn) => Record<"none" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200", { [key in T]: string; }>;
export {};
