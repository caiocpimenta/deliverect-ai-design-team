import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const modalBody = style([
    dsComponents({
        flexGrow: 1,
        // Note: this 1px vertical padding is just a cheap hack to avoid having
        // vertical scrollbars appear when using <Text> components. The scrollbar
        // is appearing because for the font we're using, for some configurations of
        // our <Text> like `size="md"`, the line-height is not enough to prevent clipping.
        // E.g. size="md" --> font-size: 1rem, line-height: 1.25rem causes clipping.
        padding: `1px ${vars.spacing.lg}`,
        overflowY: "auto",
    }),
]);
