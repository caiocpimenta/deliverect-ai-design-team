import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../tokens";
import { dsTypography } from "../../layers.css";
import { textColors } from "../textColors.css";
export const heading = recipe({
    base: dsTypography({
        margin: vars.spacing.none,
        marginBlock: vars.spacing.none,
        padding: vars.spacing.none,
    }),
    variants: {
        level: {
            1: dsTypography({
                fontSize: vars.font.size["4xl"],
                fontWeight: vars.font.weight.bold,
                lineHeight: vars.font.lineHeight["3xl"],
            }),
            2: dsTypography({
                fontSize: vars.font.size["2xl"],
                fontWeight: vars.font.weight.semibold,
                lineHeight: vars.font.lineHeight.xl,
            }),
            3: dsTypography({
                fontSize: vars.font.size.xl,
                fontWeight: vars.font.weight.semibold,
                lineHeight: vars.font.lineHeight.xl,
            }),
            4: dsTypography({
                fontSize: vars.font.size.lg,
                fontWeight: vars.font.weight.semibold,
                lineHeight: vars.font.lineHeight.xl,
            }),
            5: dsTypography({
                fontSize: vars.font.size.md,
                fontWeight: vars.font.weight.bold,
                lineHeight: vars.font.lineHeight.lg,
            }),
            6: dsTypography({
                fontSize: vars.font.size.sm,
                fontWeight: vars.font.weight.bold,
                lineHeight: vars.font.lineHeight.md,
            }),
        },
        overflow: {
            false: dsTypography({
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                wordBreak: "normal",
            }),
        },
        color: textColors,
    },
    defaultVariants: {
        overflow: true,
        color: "default",
    },
});
