import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
import { sharedStyles } from "./shared-styles.css";
export const tabsAction = style([
    sharedStyles,
    dsComponents({
        padding: `${vars.spacing["050"]}`,
        ...focusRing(),
        selectors: {
            "&:hover": {
                backgroundColor: vars.colors.fill.neutral.strong.default,
            },
            "&:active": {
                backgroundColor: vars.colors.fill.neutral.strong.active,
            },
        },
    }),
]);
