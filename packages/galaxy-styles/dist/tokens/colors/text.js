import { brand, critical, decorative, info, magic, neutral, primary, success, warning, } from "./foundation";
export const text = {
    /** @deprecated */
    primary: getOldTextColors(primary),
    neutral: {
        // Old tokens
        /** @deprecated */
        text: neutral[1000],
        /** @deprecated */
        default: {
            default: neutral[800],
            hover: neutral[900],
            active: neutral[1000],
        },
        /** @deprecated */
        secondary: neutral[600],
        /** @deprecated */
        textInverse: neutral[50],
        /** @deprecated */
        inactive: neutral[400],
        /** @deprecated */
        placeholder: neutral[500],
        // New tokens
        interactive: {
            default: neutral[800],
            hover: neutral[900],
            active: neutral[1000],
        },
        static: {
            primary: neutral[1000],
            secondary: neutral[600],
            inverse: neutral[50],
            inactive: neutral[400],
            placeholder: neutral[500],
        },
    },
    brand: getTextColors(brand),
    success: getTextColors(success),
    warning: {
        // Old tokens
        ...getOldTextColors(warning),
        // New tokens
        ...getTextColors(warning),
    },
    info: {
        // Old tokens
        ...getOldTextColors(info),
        // New tokens
        ...getTextColors(info),
    },
    critical: {
        // Old tokens
        ...getOldTextColors(critical),
        // New tokens
        ...getTextColors(critical),
    },
    magic: {
        // Old tokens
        ...getOldTextColors(magic),
        // New tokens
        ...getTextColors(magic),
    },
    decorative: {
        // Old tokens
        ...getOldTextColors(decorative),
        // New tokens
        ...getTextColors(decorative),
    },
};
/**
 * Reusable function to get the most common text colors for the given palette.
 *
 * @param palette the color palette
 * @returns an object with the text colors for the different states
 */
function getTextColors(palette) {
    return {
        interactive: {
            default: palette[600],
            hover: palette[700],
            active: palette[800],
        },
        static: palette[900],
    };
}
/**
 * Get the text colors for the different states of a component
 * @deprecated
 *
 * @param palette the color palette
 * @returns an object with the text colors for the different states
 */
function getOldTextColors(palette) {
    return {
        /** @deprecated */
        default: palette[600],
        /** @deprecated */
        hover: palette[700],
        /** @deprecated */
        active: palette[800],
        /** @deprecated */
        strong: palette[900],
    };
}
