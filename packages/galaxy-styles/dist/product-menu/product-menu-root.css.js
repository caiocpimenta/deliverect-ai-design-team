import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const productMenuRoot = style(dsComponents({
    width: "240px",
    maxHeight: "100%",
    overflow: "hidden",
}));
export const productMenuContentWrapper = style(dsComponents({
    height: "100%",
    maxHeight: "100%",
    overflowY: "auto",
    paddingBlock: vars.spacing["025"], // to avoid cutting off box shadows on child elements
    gap: vars.spacing[250],
}));
