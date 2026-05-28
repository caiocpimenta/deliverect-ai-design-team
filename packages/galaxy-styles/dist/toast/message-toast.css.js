import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
import { TOAST_ANIMATION_SPEED, TOAST_ANIMATION_TYPE, toastDefaultStatusVariant, toastStatusVariants, } from "./toast.css";
export const MESSAGE_TOAST_VIEWPORT_PADDING = vars.spacing["250"];
const hide = keyframes({
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    },
});
const slideIn = keyframes({
    from: {
        transform: `translateX(calc(100% + ${MESSAGE_TOAST_VIEWPORT_PADDING}))`,
    },
    to: {
        transform: "translateX(0)",
    },
});
const swipeOut = keyframes({
    from: {
        transform: "translateX(var(--radix-toast-swipe-end-x))",
    },
    to: {
        transform: `translateX(calc(100% + ${MESSAGE_TOAST_VIEWPORT_PADDING}))`,
    },
});
export const messageToastBody = style(dsComponents({
    gridArea: "body",
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing["150"],
}));
export const messageToastTitle = recipe({
    base: {},
    variants: {
        status: {
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
            warning: dsComponents({
                color: vars.colors.text.neutral.text,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const messageToast = recipe({
    base: dsComponents({
        display: "grid",
        gridTemplateAreas: `
        "icon body close"
      `,
        gridTemplateColumns: "auto minmax(0, 1fr) auto",
        gap: vars.spacing["150"],
        alignItems: "start",
        borderRadius: vars.border.radius["150"],
        padding: vars.spacing["150"],
        boxShadow: vars.shadows[2],
        selectors: {
            "&[data-state='open']": {
                animation: `${slideIn} ${TOAST_ANIMATION_SPEED} ${TOAST_ANIMATION_TYPE}`,
            },
            "&[data-state='closed']": {
                animation: `${hide} ${TOAST_ANIMATION_SPEED} ${TOAST_ANIMATION_TYPE}`,
            },
            "&[data-swipe='move']": {
                transform: "translateX(var(--radix-toast-swipe-move-x))",
            },
            "&[data-swipe='cancel']": {
                transform: "translateX(0)",
                transition: `transform ${TOAST_ANIMATION_SPEED} ${TOAST_ANIMATION_TYPE}`,
            },
            "&[data-swipe='end']": {
                animation: `${swipeOut} ${TOAST_ANIMATION_SPEED} ${TOAST_ANIMATION_TYPE}`,
            },
        },
    }),
    variants: {
        status: toastStatusVariants,
    },
    defaultVariants: {
        status: toastDefaultStatusVariant,
    },
});
export const messageToastViewport = style(dsComponents({
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing["150"],
    maxWidth: "500px",
    zIndex: vars.zIndexes.toastViewport,
    position: "fixed",
    outline: "none",
    listStyle: "none",
    padding: MESSAGE_TOAST_VIEWPORT_PADDING,
    top: 0,
    right: 0,
}));
