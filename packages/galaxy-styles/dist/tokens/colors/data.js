import { critical, decorative, info, magic, neutral, success, warning, } from "./foundation";
export const data = {
    neutral: getDataColors(neutral),
    success: getDataColors(success),
    critical: getDataColors(critical),
    warning: getDataColors(warning),
    info: getDataColors(info),
    magic: getDataColors(magic),
    decorative: getDataColors(decorative),
};
/**
 * Get the data colors for a given palette.
 *
 * @param palette the color palette
 * @returns an object with the data colors
 */
function getDataColors(palette) {
    return {
        [10]: palette[50],
        [100]: palette[200],
        [200]: palette[400],
        [300]: palette[600],
        [400]: palette[700],
        [500]: palette[900],
    };
}
