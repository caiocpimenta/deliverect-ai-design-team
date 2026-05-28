import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const actionPanelViewPort = style(dsComponents({
    position: "fixed",
    bottom: vars.spacing.xl,
    left: "50%",
    listStyle: "none",
    zIndex: vars.zIndexes.actionPanel.content,
    transform: "translate(-50%)",
}));
