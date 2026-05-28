import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util/focus-ring";
import { textUnderlineStyles } from "../util/text-underline";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
import { primaryButton, secondaryButton, tertiaryButton, transparentButton, } from "./button-variants.css";
import { oldFilledButton, oldGhostButton, oldOutlineButton, subtleButton, } from "./button-variants-deprecated.css";
import { iconButton } from "./icon-button.css";
import { plainButtonSize, plainButtonStatus } from "./plain-button.css";
export const button = recipe({
    base: [
        dsPrimitives({
            cursor: "pointer",
            display: "inline-flex",
            gap: vars.spacing["050"],
            alignItems: "center",
            boxSizing: "border-box",
            borderStyle: "solid",
            borderWidth: vars.border.width[1],
            borderRadius: vars.border.radius["100"],
            borderColor: "transparent",
            fontWeight: vars.font.weight.semibold,
            ":disabled": {
                cursor: "not-allowed",
            },
            ...focusRing(),
        }),
        transition("background-color"),
    ],
    variants: {
        /**
         * Status of the button, affects the color palette that's used.
         */
        status: {
            primary: dsPrimitives({
                color: vars.colors.text.neutral.static.inverse,
            }),
            critical: dsPrimitives({
                color: vars.colors.text.neutral.static.inverse,
            }),
            warning: dsPrimitives({
                color: vars.colors.text.neutral.interactive.default,
            }),
            info: dsPrimitives({
                color: vars.colors.text.neutral.static.inverse,
            }),
            neutral: dsPrimitives({
                color: vars.colors.text.neutral.interactive.default,
            }),
        },
        /**
         * Variant of button, affects border, background and text colors.
         */
        variant: {
            filled: {},
            outline: dsPrimitives({
                backgroundColor: vars.colors.fill.neutral.interactive.subtle.default,
            }),
            ghost: dsPrimitives({
                backgroundColor: vars.colors.fill.transparent.interactive.default.default,
            }),
            transparent: dsPrimitives({
                backgroundColor: vars.colors.fill.transparent.interactive.default.default,
            }),
            subtle: {},
            plain: dsPrimitives({
                backgroundColor: "transparent",
                border: 0,
                padding: 0,
                fontWeight: vars.font.weight.regular,
                borderRadius: vars.border.radius["050"],
                ":hover": {
                    ...textUnderlineStyles(),
                },
            }),
        },
        /**
         * Size of the button.
         */
        size: {
            xs: dsPrimitives({
                fontSize: vars.font.size.sm,
                lineHeight: vars.font.lineHeight.md,
                padding: `${vars.spacing["0"]} ${vars.spacing["050"]}`,
            }),
            sm: dsPrimitives({
                fontSize: vars.font.size.md,
                lineHeight: vars.font.lineHeight.md,
                padding: `calc(${vars.spacing["050"]} - ${vars.border.width[1]}) calc(${vars.spacing["100"]} - ${vars.border.width[1]})`,
            }),
            md: dsPrimitives({
                fontSize: vars.font.size.md,
                lineHeight: vars.font.lineHeight.md,
                padding: `calc(${vars.spacing["100"]} - ${vars.border.width[1]}) calc(${vars.spacing["150"]} - ${vars.border.width[1]})`,
            }),
            lg: dsPrimitives({
                fontSize: vars.font.size.lg,
                lineHeight: vars.font.lineHeight.lg,
                padding: `calc(${vars.spacing["150"]} - ${vars.border.width[1]}) calc(${vars.spacing["200"]} - ${vars.border.width[1]})`,
            }),
        },
        icon: {
            left: {},
            right: {},
            both: {},
            single: {},
        },
    },
    compoundVariants: [
        // Deprecated variants
        oldFilledButton("critical"),
        oldFilledButton("warning"),
        oldFilledButton("info"),
        // The filled neutral button is the same as the subtle variant.
        {
            ...subtleButton("neutral"),
            variants: { status: "neutral", variant: "filled" },
        },
        oldOutlineButton("critical"),
        oldOutlineButton("warning"),
        oldOutlineButton("info"),
        oldOutlineButton("neutral"),
        oldGhostButton("primary"),
        oldGhostButton("critical"),
        oldGhostButton("warning"),
        oldGhostButton("info"),
        oldGhostButton("neutral"),
        subtleButton("primary"),
        subtleButton("critical"),
        subtleButton("warning"),
        subtleButton("info"),
        subtleButton("neutral"),
        // New variants
        primaryButton("default"),
        primaryButton("critical"),
        secondaryButton("default"),
        tertiaryButton("default"),
        transparentButton("primary"),
        transparentButton("critical"),
        transparentButton("warning"),
        transparentButton("info"),
        transparentButton("neutral"),
        // Icon buttons
        iconButton("left", "xs"),
        iconButton("right", "xs"),
        iconButton("both", "xs"),
        iconButton("single", "xs"),
        iconButton("left", "sm"),
        iconButton("right", "sm"),
        iconButton("both", "sm"),
        iconButton("single", "sm"),
        iconButton("left", "md"),
        iconButton("right", "md"),
        iconButton("both", "md"),
        iconButton("single", "md"),
        iconButton("left", "lg"),
        iconButton("right", "lg"),
        iconButton("both", "lg"),
        iconButton("single", "lg"),
        // Plain buttons
        plainButtonSize("sm"),
        plainButtonSize("md"),
        plainButtonSize("lg"),
        plainButtonStatus("primary"),
        plainButtonStatus("critical"),
        plainButtonStatus("info"),
        plainButtonStatus("neutral"),
        /** @deprecated */
        plainButtonStatus("warning"),
    ],
    defaultVariants: {
        status: "primary",
        variant: "filled",
        size: "md",
    },
});
/**
 * Css specific for icons used in the button, typically a left or right icon.
 */
export const buttonIcon = style({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
});
