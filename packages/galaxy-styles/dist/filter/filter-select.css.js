import { style } from "@vanilla-extract/css";
import { dropdownMenuItemBasePaddingStyles } from "../dropdown-menu";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
const nonInteractableMenuItemStyle = {
    ...dropdownMenuItemBasePaddingStyles,
};
export const filterSelectOptionsEmpty = style(dsComponents(nonInteractableMenuItemStyle));
export const filterSelectOptionsFetching = style(dsComponents(nonInteractableMenuItemStyle));
/**
 * Styles to add on top of `baseInputFieldStyles` for the "search" input group.
 */
export const filterSelectSearchInputGroup = style(dsComponents({
    border: "none",
    padding: vars.spacing["100"],
    backgroundColor: vars.colors.fill.neutral.default.default,
    height: `calc(2 * ${vars.spacing["100"]} + ${vars.font.lineHeight.md})`,
}));
export const filterMenuTag = style(dsComponents({
    cursor: "pointer",
}));
