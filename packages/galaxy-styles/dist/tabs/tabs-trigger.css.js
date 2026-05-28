import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
import { sharedStyles } from "./shared-styles.css";
export const tabsTrigger = style([
    sharedStyles,
    dsComponents({
        padding: `${vars.spacing["050"]} ${vars.spacing["100"]}`,
        fontWeight: vars.font.weight.medium,
        lineHeight: vars.font.lineHeight.md,
        ...focusRing(vars.colors.border.info.focus),
    }),
]);
