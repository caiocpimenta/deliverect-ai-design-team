import { style } from "@vanilla-extract/css";
import { dsComponents } from "../layers.css";
import { vars } from "../tokens/theme.css";
import { dropdownMenuItem } from "./dropdown-menu-item.css";
export const dropdownMenuCheckboxItem = style([{}, dropdownMenuItem()]);
export const dropdownMenuCheckbox = style(dsComponents({
    flex: "0 0 auto",
    selectors: {
        [`${dropdownMenuCheckboxItem}[data-state="checked"] &, ${dropdownMenuCheckboxItem}[data-state="indeterminate"] &`]: {
            background: vars.colors.fill.brand.interactive.bold.default,
            border: "none",
        },
        [`${dropdownMenuCheckboxItem}[data-disabled] &`]: {
            border: "none",
            background: vars.colors.fill.neutral.static.inactive.bold,
            color: vars.colors.text.neutral.static.inactive,
            cursor: "not-allowed",
            pointerEvents: "none",
        },
        [`${dropdownMenuCheckboxItem}[data-state="checked"]:hover &, ${dropdownMenuCheckboxItem}[data-state="indeterminate"]:hover &`]: {
            background: vars.colors.fill.brand.interactive.bold.hover,
            border: "none",
        },
        [`${dropdownMenuCheckboxItem}[data-state="checked"]:active &, ${dropdownMenuCheckboxItem}[data-state="indeterminate"]:active &`]: {
            background: vars.colors.fill.brand.interactive.bold.active,
            border: "none",
        },
    },
}));
