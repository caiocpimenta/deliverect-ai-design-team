import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const actionPanelSeparator = style(dsComponents({
    backgroundColor: vars.colors.border.neutral.default.default,
    height: vars.spacing.lg,
    width: "1px",
    margin: `0 ${vars.spacing.xs}`,
}));
