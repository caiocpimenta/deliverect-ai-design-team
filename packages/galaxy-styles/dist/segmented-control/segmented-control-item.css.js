import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { transition } from "../util/transition";
import { dsComponents, dsUtilities } from "../layers.css";
const segmentedControlItemBase = style([
    dsComponents({
        backgroundColor: vars.colors.fill.neutral.interactive.bold.default,
        borderRadius: vars.border.radius["075"],
        ":hover": {
            cursor: "pointer",
            backgroundColor: vars.colors.fill.neutral.interactive.bold.hover,
        },
        ":active": {
            backgroundColor: vars.colors.fill.neutral.interactive.bold.active,
        },
        selectors: {
            '[data-state="checked"]&': {
                background: vars.colors.fill.neutral.static.default,
                boxShadow: vars.shadows[1],
            },
            '[data-state="checked"]&:disabled': {
                background: vars.colors.border.neutral.interactive.bold.hover, // This token needs to be checked on the design side
            },
            "&[data-disabled]": {
                background: vars.colors.fill.neutral.static.inactive.subtle,
                cursor: "not-allowed",
            },
        },
    }),
    transition("background-color"),
    focusRing(vars.colors.border.info.focus),
]);
const SEGMENTED_GROUP_ITEM_SIZES = Object.freeze({
    MD: "1.75rem",
    LG: "2.25rem",
});
export const segmentedControlItem = recipe({
    base: segmentedControlItemBase,
    variants: {
        size: {
            md: dsComponents({
                height: SEGMENTED_GROUP_ITEM_SIZES.MD,
                padding: `${vars.spacing["050"]} ${vars.spacing["100"]}`,
            }),
            lg: dsComponents({
                height: SEGMENTED_GROUP_ITEM_SIZES.LG,
                padding: `${vars.spacing["100"]} ${vars.spacing["100"]}`,
            }),
        },
    },
    defaultVariants: {
        size: "md",
    },
});
export const childPointerEventsNone = style(dsUtilities({
    pointerEvents: "none",
}));
