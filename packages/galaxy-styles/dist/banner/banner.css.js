import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const bannerActions = style(dsComponents({
    whiteSpace: "nowrap",
}));
const commonBaseStyles = dsComponents({
    borderRadius: vars.border.radius["150"],
    padding: vars.spacing["200"],
});
export const banner = recipe({
    base: commonBaseStyles,
    variants: {
        status: {
            neutral: dsComponents({
                backgroundColor: vars.colors.surface.neutral.static.bold,
            }),
            success: dsComponents({
                backgroundColor: vars.colors.surface.success.static.subtle,
            }),
            critical: dsComponents({
                backgroundColor: vars.colors.surface.critical.static.subtle,
            }),
            info: dsComponents({
                backgroundColor: vars.colors.surface.info.static.subtle,
            }),
            warning: dsComponents({
                backgroundColor: vars.colors.surface.warning.static.subtle,
            }),
        },
    },
    defaultVariants: {
        status: "neutral",
    },
});
