import { Status } from "./types";
/**
 * Util function to get default, hover and active text colors for a given status.
 * Poured into a util function since neutral's default text colors are nested.
 *
 * @param status - The status of the color.
 * @returns The dynamic neutral color.
 */
export declare function getDefaultTextColors(status: Status): {
    readonly default: `var(--${string})`;
    readonly hover: `var(--${string})`;
    readonly active: `var(--${string})`;
};
