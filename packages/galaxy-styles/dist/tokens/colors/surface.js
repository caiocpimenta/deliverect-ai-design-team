import { brand, critical, decorative, info, magic, neutral, primary, success, transparent, warning, } from "./foundation";
export const surface = {
    neutral: {
        // Old tokens
        /** @deprecated */
        default: neutral[0],
        /** @deprecated */
        hover: neutral[50],
        /** @deprecated */
        active: neutral[100],
        /** @deprecated */
        secondary: { default: neutral[50], hover: neutral[100], active: neutral[200] },
        /** @deprecated */
        tertiary: { default: neutral[100], hover: neutral[200], active: neutral[300] },
        /** @deprecated */
        inactive: neutral[100],
        /** @deprecated */
        inverse: neutral[800],
        /** @deprecated */
        overlay: transparent.neutral[400],
        // New tokens
        interactive: {
            subtle: {
                default: neutral[0],
                hover: neutral[50],
                active: neutral[100],
            },
            default: getInteractiveSurfaceColors(neutral),
            bold: {
                default: neutral[100],
                hover: neutral[200],
                active: neutral[300],
            },
        },
        static: {
            subtle: neutral[0],
            default: neutral[50],
            bold: neutral[100],
            inactive: neutral[200],
            inverse: neutral[800],
            overlay: transparent.neutral[400],
        },
    },
    brand: {
        interactive: getInteractiveSurfaceColors(brand),
        static: getStaticSurfaceColors(brand),
    },
    success: {
        interactive: getInteractiveSurfaceColors(success),
        static: getStaticSurfaceColors(success),
    },
    critical: {
        // Old tokens
        ...getOldSurfaceColors(critical),
        /** @deprecated */
        critical: critical[600],
        // New tokens
        interactive: getInteractiveSurfaceColors(critical),
        static: getStaticSurfaceColors(critical),
    },
    info: {
        // Old tokens
        ...getOldSurfaceColors(info),
        /** @deprecated */
        info: info[600],
        // New tokens
        interactive: getInteractiveSurfaceColors(info),
        static: getStaticSurfaceColors(info),
    },
    warning: {
        // Old tokens
        /** @deprecated */
        default: warning[50],
        /** @deprecated */
        hover: warning[100],
        /** @deprecated */
        active: warning[200],
        /** @deprecated */
        warning: warning[300],
        // New tokens
        interactive: getInteractiveSurfaceColors(warning),
        static: {
            bold: warning[300],
            subtle: warning[50],
        },
    },
    magic: {
        // Old tokens
        ...getOldSurfaceColors(magic),
        /** @deprecated */
        magic: magic[500],
        // New tokens
        interactive: getInteractiveSurfaceColors(magic),
        static: {
            bold: magic[500],
            subtle: magic[100],
        },
    },
    decorative: {
        // Old tokens
        ...getOldSurfaceColors(decorative),
        /** @deprecated */
        decorative: decorative[400],
        // New tokens
        interactive: getInteractiveSurfaceColors(decorative),
        static: { bold: decorative[400], subtle: decorative[100] },
    },
    /** @deprecated */
    primary: {
        ...getOldSurfaceColors(primary),
        /** @deprecated */
        success: primary[600],
    },
};
/**
 * Get the surface colors for an interactive component.
 *
 * @param palette the color palette
 * @returns an object with the surface colors for interactive components
 */
function getInteractiveSurfaceColors(palette) {
    return {
        default: palette[50],
        hover: palette[100],
        active: palette[200],
    };
}
/**
 * Get the surface colors for a static component.
 *
 * @param palette the color palette
 * @returns an object with the surface colors for static components
 */
function getStaticSurfaceColors(palette) {
    return {
        bold: palette[600],
        subtle: palette[100],
    };
}
/**
 * Get the surface colors for the different states of a component
 * @deprecated in favor of getSurfaceColors
 *
 * @param palette the color palette
 * @param name the name of the color palette
 * @returns an object with the surface colors for the different states
 */
function getOldSurfaceColors(palette) {
    return {
        /** @deprecated */
        default: palette[100],
        /** @deprecated */
        hover: palette[200],
        /** @deprecated */
        active: palette[300],
    };
}
