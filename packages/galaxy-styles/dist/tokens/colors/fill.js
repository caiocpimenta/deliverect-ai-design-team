import { brand, critical, decorative, info, magic, neutral, primary, success, transparent, warning, } from "./foundation";
export const fill = {
    neutral: {
        // Old tokens
        /** @deprecated */
        default: { default: neutral[0], hover: neutral[100], active: neutral[200] },
        /** @deprecated */
        weak: { default: neutral[50], hover: neutral[100], active: neutral[200] },
        /** @deprecated */
        strong: { default: neutral[100], hover: neutral[200], active: neutral[300] },
        /** @deprecated */
        inverse: { default: neutral[800], hover: neutral[900], active: neutral[1000] },
        /** @deprecated */
        inactive: { default: neutral[100], strong: neutral[200] },
        // New tokens
        interactive: {
            subtle: {
                default: neutral[0],
                hover: neutral[100],
                active: neutral[200],
            },
            bold: {
                default: neutral[100],
                hover: neutral[200],
                active: neutral[300],
            },
        },
        static: {
            default: neutral[0],
            subtle: neutral[200],
            skeleton: neutral[300],
            inverse: neutral[900],
            inactive: {
                subtle: neutral[100],
                bold: neutral[200],
            },
        },
    },
    brand: {
        interactive: {
            bold: {
                default: brand[800],
                hover: brand[700],
                active: brand[600],
            },
            subtle: getSubtleInteractiveFillColors(brand),
        },
        static: {
            bold: brand[800],
            subtle: brand[300],
        },
    },
    success: {
        interactive: {
            bold: getBoldInteractiveFillColors(success, false),
            subtle: getSubtleInteractiveFillColors(success),
        },
        static: getStaticFillColors(success),
    },
    critical: {
        // Old tokens
        ...getOldFillColors(critical),
        /** @deprecated */
        data: { default: critical[500], weak: critical[300] },
        /** @deprecated */
        critical: {
            default: critical[200],
            hover: critical[300],
            active: critical[400],
        },
        // New tokens
        interactive: {
            bold: getBoldInteractiveFillColors(critical, false),
            subtle: {
                default: critical[50],
                hover: critical[100],
                active: critical[200],
            },
        },
        static: getStaticFillColors(critical),
    },
    info: {
        // Old tokens
        ...getOldFillColors(info),
        /** @deprecated */
        data: { default: info[500], weak: info[300] },
        /** @deprecated */
        info: { default: info[200], hover: info[300], active: info[400] },
        // New tokens
        interactive: {
            bold: getBoldInteractiveFillColors(info, false),
            subtle: getSubtleInteractiveFillColors(info),
        },
        static: getStaticFillColors(info),
    },
    warning: {
        // Old tokens
        /** @deprecated */
        default: { default: warning[300], hover: warning[400], active: warning[500] },
        /** @deprecated */
        weak: { default: warning[50], hover: warning[100], active: warning[200] },
        /** @deprecated */
        warning: { default: warning[100], hover: warning[200], active: warning[300] },
        /** @deprecated */
        data: { default: warning[500], weak: warning[200] },
        // New tokens
        interactive: {
            bold: {
                default: warning[300],
                hover: warning[400],
                active: warning[500],
            },
            subtle: getSubtleInteractiveFillColors(warning),
        },
        static: {
            bold: warning[300],
            subtle: warning[100],
        },
    },
    magic: {
        // Old tokens
        ...getOldFillColors(magic),
        /** @deprecated */
        default: { default: magic[500], hover: magic[600], active: magic[700] },
        /** @deprecated */
        magic: { default: magic[200], hover: magic[300], active: magic[400] },
        // New tokens
        interactive: {
            bold: getBoldInteractiveFillColors(magic, true),
            subtle: getSubtleInteractiveFillColors(magic),
        },
        static: {
            bold: magic[500],
            subtle: magic[200],
        },
    },
    decorative: {
        // Old tokens
        ...getOldFillColors(decorative),
        /** @deprecated */
        default: {
            default: decorative[500],
            hover: decorative[600],
            active: decorative[700],
        },
        /** @deprecated */
        data: { default: decorative[400], weak: decorative[100] },
        /** @deprecated */
        decorative: {
            default: decorative[200],
            hover: decorative[300],
            active: decorative[400],
        },
        // New tokens
        interactive: {
            bold: getBoldInteractiveFillColors(decorative, true),
            subtle: getSubtleInteractiveFillColors(decorative),
        },
        static: {
            bold: decorative[300],
            subtle: decorative[100],
        },
    },
    transparent: {
        // Old tokens
        /** @deprecated */
        default: {
            default: transparent.transparent,
            hover: transparent.neutral[100],
            active: transparent.neutral[200],
        },
        /** @deprecated */
        inverse: {
            default: transparent.transparent,
            hover: transparent.inverse[100],
            active: transparent.inverse[200],
        },
        // New tokens
        interactive: {
            default: {
                default: transparent.neutral[0],
                hover: transparent.neutral[100],
                active: transparent.neutral[200],
            },
            inverse: {
                default: transparent.inverse[0],
                hover: transparent.inverse[100],
                active: transparent.inverse[200],
            },
        },
    },
    /** @deprecated */
    primary: {
        ...getOldFillColors(primary),
        /** @deprecated */
        data: { default: primary[500], weak: primary[300] },
        /** @deprecated */
        success: { default: primary[200], hover: primary[300], active: primary[400] },
    },
};
/**
 * Reusable function to get the most common bold interactive fill colors for the given palette.
 *
 * @param palette the color palette
 * @param light whether to use the lighter variant of the palette
 * @returns an object with the fill colors for the different states
 */
function getBoldInteractiveFillColors(palette, light) {
    return {
        default: palette[light ? 500 : 600],
        hover: palette[light ? 600 : 700],
        active: palette[light ? 700 : 800],
    };
}
/**
 * Reusable function to get the most common subtle interactive fill colors for the given palette.
 *
 * @param palette the color palette
 * @returns an object with the fill colors for the different states
 */
function getSubtleInteractiveFillColors(palette) {
    return {
        default: palette[100],
        hover: palette[200],
        active: palette[300],
    };
}
/**
 * Reusable function to get the most common static fill colors for the given palette.
 *
 * @param palette the color palette
 * @returns an object with the fill colors for the different states
 */
function getStaticFillColors(palette) {
    return {
        bold: palette[600],
        subtle: palette[200],
    };
}
/**
 * Get the fill colors for the different states of a component
 * @deprecated
 *
 * @param palette the color palette
 * @param name the name of the color palette
 * @returns an object with the fill colors for the different states
 */
function getOldFillColors(palette) {
    return {
        /** @deprecated */
        default: {
            default: palette[600],
            hover: palette[700],
            active: palette[800],
        },
        /** @deprecated */
        weak: {
            default: palette[50],
            hover: palette[100],
            active: palette[200],
        },
    };
}
