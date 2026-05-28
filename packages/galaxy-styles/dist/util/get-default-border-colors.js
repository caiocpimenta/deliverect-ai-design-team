import { vars } from "../tokens";
/**
 * Util function to get default, hover and active text colors for a given status.
 * Poured into a util function since neutral's default text colors are nested.
 *
 * @param status - The status of the color.
 * @returns The dynamic neutral color.
 */
export function getDefaultBorderColors(status) {
    return status === "neutral"
        ? vars.colors.border[status].default
        : vars.colors.border[status];
}
