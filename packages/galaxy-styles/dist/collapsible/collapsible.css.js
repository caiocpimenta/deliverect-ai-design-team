import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
const slideDown = keyframes({
    "0%": { height: 0 },
    "100%": { height: "var(--radix-collapsible-content-height)" },
});
const slideUp = keyframes({
    "0%": { height: "var(--radix-collapsible-content-height)" },
    "100%": { height: 0 },
});
export const collapsibleContent = recipe({
    base: dsComponents({
        overflow: "hidden",
    }),
    variants: {
        animated: {
            true: dsComponents({
                selectors: {
                    "[data-state=open]&": {
                        animation: `${slideDown} ${vars.animations.duration.fast} ${vars.animations.function.ease}`,
                    },
                    "[data-state=closed]&": {
                        animation: `${slideUp} ${vars.animations.duration.fast} ${vars.animations.function.ease}`,
                    },
                },
            }),
            false: {},
        },
    },
    defaultVariants: {
        animated: true,
    },
});
