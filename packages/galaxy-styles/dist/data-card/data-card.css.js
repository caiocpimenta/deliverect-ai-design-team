import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const dataCardRoot = recipe({
    base: dsComponents({
        borderRadius: vars.border.radius["150"],
        overflow: "hidden",
        padding: vars.spacing.md,
        gap: vars.spacing.md,
    }),
    variants: {
        status: {
            neutral: dsComponents({
                backgroundColor: vars.colors.surface.neutral.secondary.default,
            }),
            critical: dsComponents({
                backgroundColor: vars.colors.surface.critical.default,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
export const dataCardTitle = recipe({
    base: dsComponents({
        fontSize: vars.font.size.md,
        fontWeight: vars.font.weight.regular,
        color: vars.colors.text.neutral.default.default,
        textDecoration: "underline",
        lineHeight: vars.font.lineHeight.md,
        width: "fit-content",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }),
    variants: {
        interactive: {
            true: dsComponents({
                cursor: "default",
            }),
            false: dsComponents({
                cursor: "text",
            }),
        },
    },
    defaultVariants: {
        interactive: false,
    },
});
export const dataCardValue = style(dsComponents({
    fontSize: vars.font.size["2xl"],
    fontWeight: vars.font.weight.semibold,
    color: vars.colors.text.neutral.text,
    lineHeight: vars.font.lineHeight.xl,
    width: "fit-content",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));
