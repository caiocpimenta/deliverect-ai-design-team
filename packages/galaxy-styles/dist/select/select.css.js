import { layer, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { createLayerHelper, primitivesLayer } from "../layers.css";
// Add specific sub layers for this component so we can let variant styles take priority over base styles
// We're using the primitivesLayer since this has precedence over the elements layer
const selectBaseLayer = layer({ parent: primitivesLayer }, "selectBase");
const selectVariantsLayer = layer({ parent: primitivesLayer }, "selectVariants");
const dsSelectBase = createLayerHelper(selectBaseLayer);
const dsSelectVariants = createLayerHelper(selectVariantsLayer);
export const selectTrigger = style([
    dsSelectBase({
        width: "100%",
    }),
]);
export const selectContent = style([
    dsSelectBase({
        // take the width of the anchor
        minWidth: "var(--radix-popper-anchor-width)",
        // subtract to compensate for margin up top and some extra margin below
        maxHeight: `calc(var(--radix-popper-available-height) - ${vars.spacing["150"]})`,
        marginTop: vars.spacing["050"],
        backgroundColor: vars.colors.fill.neutral.default.default,
        zIndex: vars.zIndexes.modal.content,
    }),
]);
export const selectButton = recipe({
    base: dsSelectBase({
        // this sets the height the same as Input.Field
        padding: `calc(${vars.spacing["100"]} - ${vars.border.width[1]})`,
        borderColor: vars.colors.border.neutral.strong.default,
        ":hover": {
            backgroundColor: vars.colors.fill.neutral.default.hover,
        },
        ":focus-visible": {
            boxShadow: "none",
            borderColor: vars.colors.border.info.default,
            backgroundColor: vars.colors.fill.neutral.default.default,
        },
        ":disabled": {
            borderColor: vars.colors.border.neutral.inactive,
            backgroundColor: vars.colors.fill.neutral.inactive.default,
            color: vars.colors.text.neutral.inactive,
        },
    }),
    variants: {
        status: {
            default: dsSelectVariants({}),
            critical: dsSelectVariants({
                borderColor: vars.colors.border.critical.default,
                ":focus-visible": {
                    borderColor: vars.colors.border.critical.default,
                },
                ":disabled": {
                    borderColor: vars.colors.border.neutral.inactive,
                },
            }),
        },
        variant: {
            default: dsSelectVariants({}),
            ghost: dsSelectVariants({
                borderColor: vars.colors.fill.transparent.default.default,
                ":focus-visible": {
                    borderColor: vars.colors.border.info.default,
                },
                ":disabled": {
                    background: vars.colors.fill.transparent.default.default,
                },
            }),
        },
    },
    compoundVariants: [
        {
            variants: { status: "critical", variant: "ghost" },
            style: dsSelectVariants({
                borderColor: vars.colors.border.critical.default,
                ":disabled": {
                    borderColor: vars.colors.border.neutral.inactive,
                    background: vars.colors.fill.transparent.default.default,
                },
            }),
        },
    ],
});
export const selectLabel = style([
    dsSelectBase({
        // this sets the height the same as Input.Field
        lineHeight: vars.font.lineHeight.md,
    }),
]);
