import { recipe } from "@vanilla-extract/recipes";
import { transition } from "../util/transition";
import { dsComponents } from "../layers.css";
import { vars } from "../tokens/theme.css";
export const dropdownMenuRadioItem = recipe({
    base: [
        dsComponents({
            display: "flex",
            alignItems: "center",
            gap: vars.spacing["100"],
            wordBreak: "break-word",
            backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
            color: vars.colors.text.neutral.interactive.default,
            padding: `${vars.spacing["100"]} ${vars.spacing["150"]}`,
            fontSize: vars.font.size.md,
            fontWeight: vars.font.weight.regular,
            lineHeight: vars.font.lineHeight.md,
            cursor: "pointer",
            outline: "none",
            selectors: {
                '&[data-state="unchecked"]': {
                    // Extra padding to "fill" the space of the check icon
                    paddingRight: `calc(${vars.spacing["150"]} + ${vars.spacing["250"]})`,
                },
                "[data-disabled]&, [data-disabled]&:hover, [data-disabled]&:active, [data-disabled]&:focus": {
                    cursor: "not-allowed",
                    pointerEvents: "none",
                    color: vars.colors.text.neutral.static.inactive,
                },
                "[data-highlighted]&": {
                    backgroundColor: vars.colors.fill.neutral.interactive.subtle.hover,
                    color: vars.colors.text.neutral.interactive.hover,
                },
                "[data-highlighted]&:active": {
                    backgroundColor: vars.colors.fill.neutral.interactive.subtle.active,
                    color: vars.colors.text.neutral.interactive.active,
                },
                '&[data-state="checked"]:not([data-highlighted])': {
                    backgroundColor: vars.colors.fill.brand.interactive.subtle.default,
                    color: vars.colors.text.brand.static,
                },
                '&[data-state="checked"][data-highlighted]': {
                    backgroundColor: vars.colors.fill.brand.interactive.subtle.hover,
                    color: vars.colors.text.brand.static,
                },
                '&[data-state="checked"][data-highlighted]:active': {
                    backgroundColor: vars.colors.fill.brand.interactive.subtle.active,
                    color: vars.colors.text.brand.static,
                },
                '&[data-state="checked"][data-disabled]': {
                    backgroundColor: vars.colors.fill.neutral.static.inactive.subtle,
                    color: vars.colors.text.neutral.static.inactive,
                },
            },
        }),
        transition("background-color"),
    ],
    variants: {
        justify: {
            start: dsComponents({
                justifyContent: "flex-start",
                selectors: {
                    // Override unchecked padding since left-indicator items don't need right padding compensation
                    '&[data-state="unchecked"]': {
                        paddingRight: vars.spacing["150"],
                    },
                },
            }),
            between: dsComponents({ justifyContent: "space-between" }),
        },
    },
    defaultVariants: {
        justify: "between",
    },
});
