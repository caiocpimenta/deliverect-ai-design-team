import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { focusRing } from "../util";
import { dsComponents } from "../layers.css";
export const command = style([
    dsComponents({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "auto",
        boxSizing: "border-box",
        borderWidth: vars.border.width[1],
        borderColor: vars.colors.border.neutral.default.default,
        borderStyle: "solid",
        borderRadius: vars.border.radius["100"],
        boxShadow: vars.shadows[2],
        ...focusRing(),
    }),
]);
export const commandEmpty = style([
    dsComponents({
        padding: vars.spacing["150"],
        textAlign: "center",
        fontSize: vars.font.size.sm,
        color: vars.colors.text.neutral.secondary,
    }),
]);
// required as entry point to hook the globalStyle below to
export const commandGroup = style([dsComponents({})]);
globalStyle(`${commandGroup} [cmdk-group-heading]`, dsComponents({
    padding: `${vars.spacing["050"]} ${vars.spacing["100"]}`,
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.bold,
    color: vars.colors.text.neutral.default.default,
}));
export const commandList = style([
    dsComponents({
        width: "100%",
        maxWidth: "unset",
        color: vars.colors.text.neutral.text,
        paddingTop: vars.spacing["050"],
        paddingBottom: vars.spacing["050"],
        overflow: "auto",
    }),
]);
export const commandItem = style([
    dsComponents({
        position: "relative",
        justifyContent: "space-between",
        userSelect: "none",
        padding: vars.spacing["100"],
        selectors: {
            '&[aria-selected="true"]': {
                backgroundColor: vars.colors.fill.neutral.weak.hover,
            },
            "&[data-disabled]": {
                pointerEvents: "none",
                opacity: 0.5,
            },
        },
    }),
]);
export const commandInputWrapper = style([
    dsComponents({
        display: "flex",
        flexDirection: "column",
    }),
]);
export const commandInput = style([
    dsComponents({
        border: "none",
        borderBottom: `1px solid ${vars.colors.border.neutral.default.default}`,
        borderRadius: 0,
        borderTopLeftRadius: vars.border.radius["100"],
        borderTopRightRadius: vars.border.radius["100"],
        color: vars.colors.text.neutral.secondary,
        paddingTop: vars.spacing["150"],
        paddingBottom: vars.spacing["150"],
    }),
]);
