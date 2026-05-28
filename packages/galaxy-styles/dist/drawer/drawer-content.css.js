import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents, dsPrimitives } from "../layers.css";
const fadeIn = keyframes({
    "0%": { backgroundColor: "transparent" },
    "100%": { backgroundColor: vars.colors.surface.neutral.overlay },
});
const fadeOut = keyframes({
    "0%": { backgroundColor: vars.colors.surface.neutral.overlay },
    "100%": { backgroundColor: "transparent" },
});
export const drawerOverlay = recipe({
    base: dsPrimitives({
        zIndex: vars.zIndexes.drawer.overlay,
        inset: 0,
        selectors: {
            "[data-state=open]&": {
                animation: `${fadeIn} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
                backgroundColor: vars.colors.surface.neutral.overlay,
            },
            "[data-state=closed]&": {
                animation: `${fadeOut} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
            },
        },
    }),
    variants: {
        scope: {
            parent: dsPrimitives({ position: "absolute" }),
            window: dsPrimitives({ position: "fixed" }),
        },
    },
    defaultVariants: {
        scope: "window",
    },
});
const rightSlideIn = keyframes({
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
});
const rightSlideOut = keyframes({
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
});
const leftSlideIn = keyframes({
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
});
const leftSlideOut = keyframes({
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
});
export const drawerContent = recipe({
    base: dsComponents({
        display: "flex",
        flexDirection: "column",
        top: "0",
        overflowY: "auto",
        maxWidth: "100%",
        backgroundColor: vars.colors.surface.neutral.default,
        zIndex: vars.zIndexes.drawer.content,
    }),
    variants: {
        width: {
            full: dsComponents({ width: "100%" }),
            auto: dsComponents({ width: "auto" }),
        },
        height: {
            full: dsComponents({ height: "100%" }),
            auto: dsComponents({ height: "auto" }),
        },
        scope: {
            parent: dsComponents({ position: "absolute" }),
            window: dsComponents({ position: "fixed" }),
        },
        placement: {
            left: dsComponents({
                left: "0",
                boxShadow: vars.shadows["drawer-left"],
                selectors: {
                    "[data-state=open]&": {
                        animation: `${leftSlideIn} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
                    },
                    "[data-state=closed]&": {
                        animation: `${leftSlideOut} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
                    },
                },
            }),
            right: dsComponents({
                right: "0",
                boxShadow: vars.shadows["drawer-right"],
                selectors: {
                    "[data-state=open]&": {
                        animation: `${rightSlideIn} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
                    },
                    "[data-state=closed]&": {
                        animation: `${rightSlideOut} ${vars.animations.duration.normal} ${vars.animations.function.ease}`,
                    },
                },
            }),
        },
    },
    defaultVariants: {
        width: "auto",
        height: "full",
        placement: "right",
        scope: "window",
    },
});
