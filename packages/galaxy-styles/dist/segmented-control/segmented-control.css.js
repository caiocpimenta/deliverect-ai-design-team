import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const segmentedControlRoot = style(dsComponents({
    display: "flex",
    gap: vars.spacing["050"],
    padding: vars.spacing["050"],
    backgroundColor: vars.colors.surface.neutral.static.bold,
    width: "fit-content",
    borderRadius: vars.border.radius["100"],
}));
