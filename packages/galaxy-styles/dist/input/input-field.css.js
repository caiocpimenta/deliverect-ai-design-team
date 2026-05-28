import { layer } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { transition } from "../util/transition";
import { createLayerHelper, primitivesLayer } from "../layers.css";
// Add specific sub layers for this component so we can let variant styles take priority over base styles
const inputFieldBaseLayer = layer({ parent: primitivesLayer }, "inputFieldBase");
const inputFieldVariantsLayer = layer({ parent: primitivesLayer }, "inputFieldVariants");
const dsInputFieldBase = createLayerHelper(inputFieldBaseLayer);
const dsInputFieldVariants = createLayerHelper(inputFieldVariantsLayer);
/**
 * Base styles for the input field or its wrapper
 */
const baseInputFieldStyles = dsInputFieldBase({
    borderRadius: vars.border.radius["100"],
    borderWidth: vars.border.width["1"],
    borderStyle: "solid",
    borderColor: vars.colors.border.neutral.interactive.bold.default,
    padding: `calc(${vars.spacing["100"]} - ${vars.border.width[1]})`,
    backgroundColor: vars.colors.fill.neutral.static.default,
    fontSize: vars.font.size.md,
    lineHeight: vars.font.lineHeight.md,
});
/**
 * Styles to apply in the ghost variant.
 */
const baseGhostStyles = dsInputFieldVariants({
    borderColor: "transparent",
    backgroundColor: "transparent",
    ":hover": {
        backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
    },
});
/**
 * Common status styles for the input field and input group.
 */
const statusVariants = {
    default: {},
    critical: dsInputFieldVariants({
        borderColor: vars.colors.border.critical.interactive.default,
    }),
};
/**
 * Common resize styles for the input field and input group.
 */
const resizeVariants = {
    none: dsInputFieldVariants({
        resize: "none",
    }),
    vertical: dsInputFieldVariants({
        resize: "vertical",
    }),
    horizontal: dsInputFieldVariants({
        resize: "horizontal",
    }),
    both: dsInputFieldVariants({
        resize: "both",
    }),
};
/**
 * Styles to apply when the input field is hovered
 */
const hoverStyles = {
    borderColor: vars.colors.border.neutral.interactive.bold.hover,
};
/**
 * Styles to apply when the input field is focused
 */
const focusStyles = {
    outline: "none",
    borderColor: vars.colors.border.neutral.interactive.bold.active,
};
/**
 * Common compound variants for the input field and input group.
 */
const commonCompoundVariants = {
    variants: { status: "critical", variant: "ghost" },
    style: dsInputFieldVariants({
        borderColor: vars.colors.border.critical.interactive.default,
    }),
};
/**
 * Common styles for ghost + (readOnly || disabled) variants
 */
const ghostCommonCompoundVariants = dsInputFieldVariants({
    color: vars.colors.text.neutral.static.placeholder,
    borderColor: vars.colors.transparent.transparent,
    backgroundColor: vars.colors.transparent.transparent,
    ":hover": {
        backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
    },
});
/**
 * Styled to be applied to the input group for readOnly and ghost.
 */
const readOnlyGhostCompoundVariants = {
    variants: { readOnly: true, variant: "ghost" },
    style: ghostCommonCompoundVariants,
};
/**
 * Styled to be applied to the input group for disabled and ghost.
 */
const disabledGhostCompoundVariants = {
    variants: { disabled: true, variant: "ghost" },
    style: ghostCommonCompoundVariants,
};
/**
 * Common default variants for the input field and input group.
 */
const commonDefaultVariants = {
    status: "default",
    variant: "default",
    resize: "none",
};
/**
 * Styles to apply when the input field is read-only.
 */
const readOnlyStyles = dsInputFieldVariants({
    backgroundColor: vars.colors.fill.neutral.static.inactive.subtle,
});
const inputFieldHeight = `calc(2 * ${vars.spacing["100"]} + ${vars.font.lineHeight.md})`;
/**
 * Styles for the input group.
 * This wraps an input field together with its prefix and suffix elements.
 */
export const inputGroup = recipe({
    base: [
        baseInputFieldStyles,
        dsInputFieldBase({
            display: "inline-flex",
            width: "fit-content",
            height: inputFieldHeight,
            ":hover": hoverStyles,
            ":focus-within": focusStyles,
        }),
    ],
    variants: {
        status: statusVariants,
        variant: {
            default: {},
            ghost: [baseGhostStyles],
        },
        resize: resizeVariants,
        readOnly: {
            true: readOnlyStyles,
        },
        disabled: {
            true: [
                readOnlyStyles,
                dsInputFieldVariants({
                    cursor: "not-allowed",
                }),
            ],
        },
    },
    compoundVariants: [
        commonCompoundVariants,
        readOnlyGhostCompoundVariants,
        disabledGhostCompoundVariants,
    ],
    defaultVariants: commonDefaultVariants,
});
/**
 * Styles for the input field when it's wrapped in an input group.
 */
const wrappedInputStyles = dsInputFieldBase({
    selectors: {
        [`${inputGroup.classNames.base} &`]: {
            border: 0,
            borderRadius: 0,
            padding: 0,
            backgroundColor: "transparent",
            height: "initial",
        },
        [`${inputGroup.classNames.base} &:hover`]: {},
        [`${inputGroup.classNames.base} &:focus`]: {},
    },
});
/**
 * Styles for the input field.
 */
export const inputField = recipe({
    base: [
        baseInputFieldStyles,
        dsInputFieldBase({
            ":hover": hoverStyles,
            ":focus": focusStyles,
            selectors: {
                // Set height for single-line input fields without rows
                // This prevents a scrolling issue when line-height is inherited from another element
                "&:not(textarea)": {
                    height: inputFieldHeight,
                },
                // Read-only styles (also match disabled field)
                "&:read-only": {
                    backgroundColor: vars.colors.fill.neutral.static.subtle,
                },
                "&:read-only:not(:focus)": {
                    borderColor: vars.colors.border.neutral.static.inactive,
                },
                "&:read-only::placeholder": {
                    color: vars.colors.text.neutral.static.placeholder,
                },
                // Disabled styles (only for specifically disabled field)
                "&:disabled": {
                    cursor: "not-allowed",
                },
                // Placeholder styles
                "&::placeholder": {
                    color: vars.colors.text.neutral.static.placeholder,
                },
            },
        }),
        wrappedInputStyles,
        transition("background-color"),
        transition("border-color"),
    ],
    variants: {
        status: statusVariants,
        variant: {
            default: {},
            ghost: [
                baseGhostStyles,
                dsInputFieldVariants({
                    ":hover": {
                        backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
                    },
                    ":focus": focusStyles,
                    selectors: {
                        // Read-only ghost styles (also match disabled field)
                        "&:read-only:not(:hover)": {
                            backgroundColor: vars.colors.transparent.transparent,
                        },
                        "&:read-only:not(:focus)": {
                            borderColor: vars.colors.transparent.transparent,
                        },
                    },
                }),
            ],
        },
        resize: resizeVariants,
    },
    compoundVariants: [commonCompoundVariants],
    defaultVariants: commonDefaultVariants,
});
