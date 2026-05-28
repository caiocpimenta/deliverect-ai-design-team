import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const TOAST_ANIMATION_SPEED = vars.animations.duration.veryFast;
export const TOAST_ANIMATION_TYPE = vars.animations.function.ease;
const toastCommonIconStyles = {
    neutral: dsComponents({
        color: vars.colors.icon.neutral.inverse,
    }),
    success: dsComponents({
        color: vars.colors.icon.neutral.inverse,
    }),
    critical: dsComponents({
        color: vars.colors.icon.neutral.inverse,
    }),
    info: dsComponents({
        color: vars.colors.icon.neutral.inverse,
    }),
};
const toastCommonTextStyles = {
    neutral: dsComponents({
        color: vars.colors.text.neutral.textInverse,
    }),
    success: dsComponents({
        color: vars.colors.text.neutral.textInverse,
    }),
    critical: dsComponents({
        color: vars.colors.text.neutral.textInverse,
    }),
    info: dsComponents({
        color: vars.colors.text.neutral.textInverse,
    }),
};
export const toastClose = recipe({
    base: {
        gridArea: "close",
    },
    variants: {
        status: {
            ...toastCommonIconStyles,
            warning: dsComponents({
                color: vars.colors.icon.neutral.default.default,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const toastIcon = recipe({
    base: {
        gridArea: "icon",
    },
    variants: {
        status: {
            ...toastCommonIconStyles,
            warning: dsComponents({
                color: vars.colors.icon.neutral.strong,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const toastDescription = recipe({
    base: dsComponents({
        fontWeight: vars.font.weight.regular,
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.md,
        textAlign: "left",
        /* --- Below: multi-line ellipsis --- */
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        overflow: "hidden",
        /* --- Fallback for browsers that don't support -webkit-line-clamp --- */
        maxHeight: `calc(${vars.font.lineHeight.md} * 3)`, // 3 lines
    }),
    variants: {
        status: {
            ...toastCommonTextStyles,
            warning: dsComponents({
                color: vars.colors.text.neutral.text,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const toastAction = recipe({
    base: {
        textDecoration: "underline",
        width: "fit-content",
    },
    variants: {
        status: {
            ...toastCommonTextStyles,
            warning: dsComponents({
                color: vars.colors.text.neutral.default.default,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const toastStatusVariants = {
    neutral: dsComponents({
        backgroundColor: vars.colors.surface.neutral.inverse,
        color: vars.colors.text.neutral.textInverse,
    }),
    warning: dsComponents({
        backgroundColor: vars.colors.surface.warning.warning,
        color: vars.colors.text.neutral.text,
    }),
    success: dsComponents({
        backgroundColor: vars.colors.surface.primary.success,
        color: vars.colors.text.neutral.textInverse,
    }),
    critical: dsComponents({
        backgroundColor: vars.colors.surface.critical.critical,
        color: vars.colors.text.neutral.textInverse,
    }),
    info: dsComponents({
        backgroundColor: vars.colors.surface.info.info,
        color: vars.colors.text.neutral.textInverse,
    }),
};
export const toastDefaultStatusVariant = "neutral";
