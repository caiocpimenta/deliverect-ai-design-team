import { createVar, fallbackVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
export const minWidthVar = createVar();
export const tableCell = recipe({
    base: dsPrimitives({
        padding: vars.spacing.xs,
        borderRadius: vars.border.radius.none,
        borderBottom: `${vars.border.width[1]} solid ${vars.colors.border.neutral.static.default}`,
        verticalAlign: "middle",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        minWidth: fallbackVar(minWidthVar, "auto"),
    }),
    variants: {
        align: {
            left: dsPrimitives({
                textAlign: "left",
            }),
            center: dsPrimitives({
                textAlign: "center",
            }),
            right: dsPrimitives({
                textAlign: "right",
            }),
            justify: dsPrimitives({
                textAlign: "justify",
            }),
        },
        sticky: {
            true: dsPrimitives({
                position: "sticky",
                left: 0,
                backgroundColor: "inherit",
                /*
                  Fix Firefox issue: Set 'background-clip: padding-box'
                  to prevent background from overlapping cell border.
                */
                backgroundClip: "padding-box",
                zIndex: vars.zIndexes.table.stickyColumn,
                selectors: {
                    "[data-scrolled-horizontally] &::after": {
                        content: "",
                        position: "absolute",
                        right: "-4px",
                        top: "0",
                        bottom: "-1px",
                        width: "5px",
                        borderLeft: `1px solid ${vars.colors.border.neutral.static.default}`,
                        background: "linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 100%)",
                    },
                },
            }),
        },
    },
    defaultVariants: {
        align: "left",
        sticky: false,
    },
});
