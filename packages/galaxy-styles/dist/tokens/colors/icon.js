import { brand, critical, decorative, info, magic, neutral, primary, success, warning, } from "./foundation";
export const icon = {
    /** @deprecated */
    primary: getOldIconColors(primary),
    neutral: {
        // Old tokens
        /** @deprecated */
        default: {
            default: neutral[800],
            hover: neutral[900],
            active: neutral[1000],
        },
        /** @deprecated */
        weak: { default: neutral[500], hover: neutral[600], active: neutral[700] },
        /** @deprecated */
        inactive: neutral[400],
        /** @deprecated */
        strong: neutral[1000],
        /** @deprecated */
        inverse: neutral[0],
        // New tokens
        interactive: {
            bold: {
                default: neutral[800],
                hover: neutral[900],
                active: neutral[1000],
            },
            subtle: {
                default: neutral[600],
                hover: neutral[700],
                active: neutral[800],
            },
        },
        static: {
            default: neutral[1000],
            inactive: neutral[400],
            inverse: neutral[0],
        },
    },
    brand: getIconColors(brand),
    success: getIconColors(success),
    warning: {
        // Old tokens
        ...getOldIconColors(warning),
        // New tokens
        ...getIconColors(warning),
    },
    info: {
        // Old tokens
        ...getOldIconColors(info),
        // New tokens
        ...getIconColors(info),
    },
    critical: {
        // Old tokens
        ...getOldIconColors(critical),
        // New tokens
        ...getIconColors(critical),
    },
    magic: {
        // Old tokens
        ...getOldIconColors(magic),
        /** @deprecated */
        strong: magic[900],
        // New tokens
        ...getIconColors(magic),
        static: magic[900],
    },
    decorative: {
        // Old tokens
        ...getOldIconColors(decorative),
        /** @deprecated */
        strong: decorative[900],
        // New tokens
        ...getIconColors(decorative),
        static: decorative[900],
    },
};
/**
 * Reusable function to get the most common icon colors for the given palette.
 *
 * @param palette the color palette
 * @returns an object with the icon colors for the different states
 */
function getIconColors(palette) {
    return {
        interactive: {
            default: palette[600],
            hover: palette[700],
            active: palette[800],
        },
        static: palette[800],
    };
}
/**
 * Get the icon colors for the different states of a component
 * @deprecated
 *
 * @param palette the color palette
 * @returns an object with the icon colors for the different states
 */
function getOldIconColors(palette) {
    return {
        /** @deprecated */
        default: palette[600],
        /** @deprecated */
        hover: palette[700],
        /** @deprecated */
        active: palette[800],
        /** @deprecated */
        strong: palette[800],
    };
}
