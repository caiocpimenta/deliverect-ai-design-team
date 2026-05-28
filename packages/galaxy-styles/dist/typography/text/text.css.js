import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../tokens";
import { transition } from "../../util/transition";
import { dsTypography } from "../../layers.css";
import { textColors } from "../textColors.css";
/** Styles for the Text component */
export const text = recipe({
    base: [
        dsTypography({
            margin: vars.spacing.none,
            marginBlock: vars.spacing.none,
            padding: vars.spacing.none,
        }),
        transition("color"),
    ],
    variants: {
        // Determines the font size and line height for the text
        size: {
            md: dsTypography({
                fontSize: vars.font.size.md,
                lineHeight: vars.font.lineHeight.md,
            }),
            sm: dsTypography({
                fontSize: vars.font.size.sm,
                lineHeight: vars.font.lineHeight.md,
            }),
            xs: dsTypography({
                fontSize: vars.font.size.xs,
                lineHeight: vars.font.lineHeight.sm,
            }),
        },
        // Determines the font weight for the text component
        weight: {
            regular: dsTypography({ fontWeight: vars.font.weight.regular }),
            medium: dsTypography({ fontWeight: vars.font.weight.medium }),
            bold: dsTypography({ fontWeight: vars.font.weight.semibold }),
        },
        // Determine the text color
        color: textColors,
        // Does the text overflow or not
        overflow: {
            false: dsTypography({
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                wordBreak: "normal",
            }),
        },
        breakOnSpaces: {
            true: dsTypography({
                whiteSpace: "break-spaces",
            }),
        },
        align: {
            left: dsTypography({ textAlign: "left" }),
            center: dsTypography({ textAlign: "center" }),
            right: dsTypography({ textAlign: "right" }),
        },
        width: {
            full: dsTypography({
                width: "100%",
            }),
            auto: dsTypography({
                width: "auto",
            }),
        },
    },
    defaultVariants: {
        size: "md",
        weight: "regular",
        color: "default",
        overflow: true,
        align: "left",
        width: "auto",
    },
});
