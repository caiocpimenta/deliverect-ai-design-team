import { brand, critical, decorative, info, magic, neutral, primary, success, warning, } from "./foundation";
export const border = {
    /** @deprecated */
    default: neutral[200],
    /** @deprecated */
    primary: getOldBorderColors(primary),
    neutral: {
        // Old tokens
        /** @deprecated */
        default: {
            default: neutral[200],
            hover: neutral[300],
            active: neutral[400],
        },
        /** @deprecated */
        weak: {
            default: neutral[100],
            hover: neutral[200],
            active: neutral[300],
        },
        /** @deprecated */
        strong: {
            default: neutral[300],
            hover: neutral[400],
            active: neutral[500],
        },
        /** @deprecated */
        inverse: {
            default: neutral[0],
            hover: neutral[50],
            active: neutral[100],
        },
        /** @deprecated */
        inactive: neutral[400],
        /** @deprecated */
        divider: neutral[100],
        /** @deprecated */
        emphasize: neutral[800],
        // New tokens
        interactive: {
            default: {
                default: neutral[200],
                hover: neutral[300],
                active: neutral[400],
            },
            subtle: {
                default: neutral[100],
                hover: neutral[200],
                active: neutral[300],
            },
            bold: {
                default: neutral[300],
                hover: neutral[400],
                active: neutral[500],
            },
            inverse: {
                default: neutral[0],
                hover: neutral[50],
                active: neutral[100],
            },
        },
        static: {
            default: neutral[200],
            inactive: neutral[100],
            divider: neutral[100],
            emphasize: neutral[800],
        },
    },
    brand: {
        interactive: getInteractiveBorderColors(brand),
        static: {
            bold: brand[800],
            subtle: brand[100],
        },
    },
    success: {
        interactive: getInteractiveBorderColors(success),
        static: getStaticBorderColors(success),
    },
    critical: {
        // Old tokens
        ...getOldBorderColors(critical),
        // New tokens
        interactive: getInteractiveBorderColors(critical),
        static: getStaticBorderColors(critical),
    },
    info: {
        // Old tokens
        ...getOldBorderColors(info),
        /** @deprecated */
        focus: info[300],
        // New tokens
        interactive: {
            ...getInteractiveBorderColors(info),
            focus: info[300],
        },
        static: getStaticBorderColors(info),
    },
    warning: {
        // Old tokens
        ...getOldBorderColors(warning),
        // New tokens
        interactive: getInteractiveBorderColors(warning),
        static: {
            bold: warning[500],
            subtle: warning[100],
        },
    },
    magic: {
        // Old tokens
        ...getOldBorderColors(magic),
        // New tokens
        interactive: getInteractiveBorderColors(magic),
        static: getStaticBorderColors(magic),
    },
    decorative: {
        // Old tokens
        ...getOldBorderColors(decorative),
        // New tokens
        interactive: getInteractiveBorderColors(decorative),
        static: {
            bold: decorative[200],
            subtle: decorative[100],
        },
    },
};
/**
 * Get the border colors for an interactive component.
 *
 * @param palette the color palette
 * @returns an object with the border colors for interactive components
 */
function getInteractiveBorderColors(palette) {
    return {
        default: palette[600],
        hover: palette[700],
        active: palette[800],
    };
}
/**
 * Get the border colors for a static component.
 *
 * @param palette the color palette
 * @returns an object with the border colors for static components
 */
function getStaticBorderColors(palette) {
    return {
        bold: palette[600],
        subtle: palette[200],
    };
}
/**
 * Get the border colors for the different states of a component
 * @deprecated
 *
 * @param palette the color palette
 * @returns an object with the border colors for the different states
 */
function getOldBorderColors(palette) {
    return {
        /** @deprecated */
        default: palette[600],
        /** @deprecated */
        hover: palette[700],
        /** @deprecated */
        active: palette[800],
    };
}
