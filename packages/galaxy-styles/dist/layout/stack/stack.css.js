import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../tokens";
import { responsiveStyle } from "../../tokens/breakpoints";
import { gap, mapSpacing } from "../../util/spacing";
import { dsLayout } from "../../layers.css";
const gapFn = gap(dsLayout);
export const stackSpace = styleVariants({
    ...mapSpacing(gapFn),
    gutter: [
        gapFn(vars.spacing.md),
        responsiveStyle({
            tabletLandscape: gapFn(vars.spacing.lg),
            desktop: gapFn(vars.spacing.xl),
        }),
    ],
});
export const stack = recipe({
    base: dsLayout({
        display: "flex",
        flexDirection: "column",
    }),
    variants: {
        height: {
            full: dsLayout({ height: "100%" }),
            auto: dsLayout({ height: "auto" }),
        },
        space: stackSpace,
        alignX: {
            center: dsLayout({
                alignItems: "center",
            }),
            left: dsLayout({ alignItems: "flex-start" }),
            right: dsLayout({ alignItems: "flex-end" }),
            stretch: dsLayout({ alignItems: "stretch" }),
        },
        alignY: {
            center: dsLayout({
                justifyContent: "center",
            }),
            top: dsLayout({ justifyContent: "flex-start" }),
            bottom: dsLayout({ justifyContent: "flex-end" }),
            spaceBetween: dsLayout({ justifyContent: "space-between" }),
        },
    },
    defaultVariants: {
        height: "full",
        space: "none",
    },
});
