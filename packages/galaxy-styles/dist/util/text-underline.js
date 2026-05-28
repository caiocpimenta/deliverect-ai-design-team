import { vars } from "../tokens";
/**
 * Helper that provide consistent underline styling to text underline decoration.
 *
 * @returns text underline style rules
 */
export const textUnderlineStyles = () => ({
    textDecoration: "underline",
    textUnderlineOffset: "0.16rem",
    textDecorationThickness: vars.border.width[1],
});
