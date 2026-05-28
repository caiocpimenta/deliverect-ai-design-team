import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const emptyStateRoot = style(dsComponents({
    backgroundColor: vars.colors.surface.neutral.secondary.default,
    borderRadius: vars.border.radius["200"],
}));
