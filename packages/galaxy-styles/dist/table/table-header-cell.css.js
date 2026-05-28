import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { transition } from "../util/transition";
import { dsPrimitives } from "../layers.css";
import { vars } from "../tokens/theme.css";
import { tableRow } from "./table-row.css";
export const tableHeaderCell = recipe({
    base: style([
        dsPrimitives({
            fontSize: vars.font.size.xs,
            fontWeight: vars.font.weight.medium,
            lineHeight: vars.font.lineHeight.sm,
            borderBottom: `${vars.border.width[1]} solid ${vars.colors.border.neutral.static.default}`,
            backgroundColor: vars.colors.surface.neutral.interactive.default.default,
            // Don't have a dark border when our header is sticky (because it already has a box shadow)
            [`[data-scrolled-vertically] .${tableRow.classNames.variants.sticky.true} &`]: { borderBottom: "initial" },
        }),
        transition("background-color"),
    ]),
    variants: {
        noHover: {
            false: dsPrimitives({
                ":hover": {
                    backgroundColor: vars.colors.surface.neutral.interactive.default.hover,
                },
                ":active": {
                    backgroundColor: vars.colors.surface.neutral.interactive.default.active,
                },
            }),
        },
    },
    defaultVariants: {
        noHover: false,
    },
});
