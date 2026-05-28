import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
export const inputLabelTooltip = style(dsComponents({
    borderRadius: vars.border.radius["050"],
    ...focusRing(),
}));
