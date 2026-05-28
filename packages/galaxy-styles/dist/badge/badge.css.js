import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
const commonBaseStyles = dsComponents({
    borderRadius: vars.border.radius["100"],
    display: "inline-flex",
    gap: vars.spacing["050"],
    alignItems: "center",
    fontWeight: vars.font.weight.regular,
});
const commonSizeStyles = {
    sm: dsComponents({
        borderRadius: vars.border.radius["200"],
        fontSize: vars.font.size.xs,
        height: "fit-content",
        minHeight: vars.sizing["250"],
        lineHeight: vars.font.lineHeight.sm,
        paddingTop: vars.spacing["0"],
        paddingBottom: vars.spacing["0"],
        paddingLeft: vars.spacing["075"],
        paddingRight: vars.spacing["075"],
    }),
    md: dsComponents({
        fontSize: vars.font.size.sm,
        height: "fit-content",
        minHeight: vars.sizing["350"],
        lineHeight: vars.font.lineHeight.sm,
        paddingTop: vars.spacing["050"],
        paddingBottom: vars.spacing["050"],
        paddingLeft: vars.spacing["100"],
        paddingRight: vars.spacing["100"],
    }),
    lg: dsComponents({
        fontSize: vars.font.size.md,
        height: "fit-content",
        minHeight: vars.sizing["450"],
        lineHeight: vars.font.lineHeight.md,
        padding: vars.spacing["100"],
    }),
};
const commonDefaultVariants = { size: "md", status: "neutral" };
export const badge = recipe({
    base: commonBaseStyles,
    variants: {
        /** Status of the badge, affects the colour pattern */
        status: {
            neutral: dsComponents({
                backgroundColor: vars.colors.fill.neutral.static.subtle,
                color: vars.colors.text.neutral.static.primary,
            }),
            success: dsComponents({
                backgroundColor: vars.colors.fill.success.static.subtle,
                color: vars.colors.text.success.static,
            }),
            critical: dsComponents({
                backgroundColor: vars.colors.fill.critical.static.subtle,
                color: vars.colors.text.critical.static,
            }),
            info: dsComponents({
                backgroundColor: vars.colors.fill.info.static.subtle,
                color: vars.colors.text.info.static,
            }),
            warning: dsComponents({
                backgroundColor: vars.colors.fill.warning.static.subtle,
                color: vars.colors.text.warning.static,
            }),
            magic: dsComponents({
                backgroundColor: vars.colors.fill.magic.static.subtle,
                color: vars.colors.text.magic.static,
            }),
            decorative: dsComponents({
                backgroundColor: vars.colors.fill.decorative.static.subtle,
                color: vars.colors.text.decorative.static,
            }),
        },
        size: commonSizeStyles,
    },
    defaultVariants: commonDefaultVariants,
});
export const darkBadge = recipe({
    base: commonBaseStyles,
    variants: {
        /** Status of the badge, affects the colour pattern */
        status: {
            neutral: dsComponents({
                backgroundColor: vars.colors.fill.neutral.static.inverse,
                color: vars.colors.text.neutral.static.inverse,
            }),
            success: dsComponents({
                backgroundColor: vars.colors.fill.success.static.bold,
                color: vars.colors.text.neutral.static.inverse,
            }),
            critical: dsComponents({
                backgroundColor: vars.colors.fill.critical.static.bold,
                color: vars.colors.text.neutral.static.inverse,
            }),
            info: dsComponents({
                backgroundColor: vars.colors.fill.info.static.bold,
                color: vars.colors.text.neutral.static.inverse,
            }),
            warning: dsComponents({
                backgroundColor: vars.colors.fill.warning.static.bold,
                color: vars.colors.text.neutral.static.primary,
            }),
            magic: dsComponents({
                backgroundColor: vars.colors.fill.magic.static.bold,
                color: vars.colors.text.neutral.static.inverse,
            }),
            decorative: dsComponents({
                backgroundColor: vars.colors.fill.decorative.static.bold,
                color: vars.colors.text.neutral.static.primary,
            }),
        },
        size: commonSizeStyles,
    },
    defaultVariants: commonDefaultVariants,
});
const commonIconBaseStyles = {
    display: "inline-flex",
    alignItems: "center",
};
export const lightBadgeIcon = recipe({
    base: dsComponents(commonIconBaseStyles),
    variants: {
        status: {
            neutral: dsComponents({
                color: vars.colors.icon.neutral.static.default,
            }),
            success: dsComponents({
                color: vars.colors.icon.success.static,
            }),
            critical: dsComponents({
                color: vars.colors.icon.critical.static,
            }),
            info: dsComponents({
                color: vars.colors.icon.info.static,
            }),
            warning: dsComponents({
                color: vars.colors.icon.warning.static,
            }),
            magic: dsComponents({
                color: vars.colors.icon.magic.static,
            }),
            decorative: dsComponents({
                color: vars.colors.icon.decorative.static,
            }),
        },
    },
});
export const darkBadgeIcon = recipe({
    base: dsComponents(commonIconBaseStyles),
    variants: {
        status: {
            neutral: {},
            success: {},
            critical: {},
            info: {},
            warning: dsComponents({
                color: vars.colors.icon.neutral.static.default,
            }),
            magic: {},
            decorative: dsComponents({
                color: vars.colors.icon.neutral.static.default,
            }),
        },
    },
});
