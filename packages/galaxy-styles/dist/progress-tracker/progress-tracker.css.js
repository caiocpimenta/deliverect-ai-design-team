import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const progressTracker = style(dsComponents({
    height: vars.sizing["075"],
}));
