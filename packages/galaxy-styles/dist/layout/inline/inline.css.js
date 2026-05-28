import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../tokens";
import { responsiveStyle } from "../../tokens/breakpoints";
import { gap, mapSpacing } from "../../util/spacing";
import { dsLayout } from "../../layers.css";
const gapFn = gap(dsLayout);
const inlineSpace = styleVariants({
    ...mapSpacing(gapFn),
    gutter: [
        gapFn(vars.spacing.md),
        responsiveStyle({
            tabletLandscape: gapFn(vars.spacing.lg),
            desktop: gapFn(vars.spacing.xl),
        }),
    ],
});
export const inline = recipe({
    base: dsLayout({
        display: "flex",
        flexDirection: "row",
    }),
    variants: {
        width: {
            full: dsLayout({ width: "100%" }),
            auto: dsLayout({ width: "auto" }),
        },
        space: inlineSpace,
        alignX: {
            left: dsLayout({ justifyContent: "flex-start" }),
            center: dsLayout({ justifyContent: "center" }),
            right: dsLayout({ justifyContent: "flex-end" }),
            spaceBetween: dsLayout({ justifyContent: "space-between" }),
        },
        alignY: {
            center: dsLayout({
                alignItems: "center",
            }),
            top: dsLayout({ alignItems: "flex-start" }),
            bottom: dsLayout({ alignItems: "flex-end" }),
            stretch: dsLayout({ alignItems: "stretch" }),
        },
        wrap: {
            true: dsLayout({
                flexWrap: "wrap",
            }),
        },
    },
    defaultVariants: {
        width: "full",
        space: "none",
        alignX: "left",
        alignY: "center",
        wrap: false,
    },
});
