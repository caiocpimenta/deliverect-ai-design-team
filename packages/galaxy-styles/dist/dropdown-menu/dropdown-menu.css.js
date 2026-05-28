import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const dropdownMenu = style([
    dsComponents({
        minWidth: "200px",
        maxWidth: "300px",
        padding: `${vars.spacing["2xs"]} 0`,
        zIndex: vars.zIndexes.floatingPanel,
        boxShadow: vars.shadows[2],
        borderRadius: vars.border.radius["100"],
        backgroundColor: vars.colors.fill.neutral.default.default,
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.default.default}`,
    }),
]);
export const dropdownMenuSeparator = style(dsComponents({
    height: 0,
    border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.divider}`,
    margin: `${vars.spacing["2xs"]} 0`,
}));
export const dropdownMenuLabel = style(dsComponents({
    wordBreak: "break-word",
    backgroundColor: vars.colors.fill.neutral.default.default,
    padding: `${vars.spacing["2xs"]} ${vars.spacing.sm}`,
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.semibold,
    lineHeight: vars.font.lineHeight.md,
    color: vars.colors.text.neutral.secondary,
}));
export const dropdownMenuScrollable = style(dsComponents({
    maxHeight: 300,
    width: "100%",
    overflow: "auto",
}));
