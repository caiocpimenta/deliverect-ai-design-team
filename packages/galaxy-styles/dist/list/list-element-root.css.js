import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
export const listElementRoot = recipe({
    base: dsPrimitives({
        display: "grid",
        gridTemplateColumns: "auto 1fr auto", // middle column shrinks/grows with the width of the component
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `
    "prefix title       suffix"
    "prefix description suffix"
    `,
        alignItems: "center", // vertical alignment
        borderColor: vars.colors.border.neutral.default.default,
        backgroundColor: vars.colors.surface.neutral.default,
        ":hover": {
            backgroundColor: vars.colors.surface.neutral.hover,
        },
    }),
    variants: {
        type: {
            default: {},
            divider: {
                borderBottomWidth: vars.border.width[1],
            },
            card: {
                borderWidth: vars.border.width[1],
                borderRadius: vars.border.radius["100"],
            },
        },
        size: {
            default: {
                padding: vars.spacing.md,
            },
            compact: {
                padding: `${vars.spacing.xs} ${vars.spacing.md}`,
            },
        },
    },
});
export const listElementPrefix = style([
    dsPrimitives({
        gridArea: "prefix",
        marginRight: vars.spacing.xs,
        height: "100%",
    }),
]);
export const listElementTitle = style([
    dsPrimitives({
        gridArea: "title",
    }),
]);
export const listElementSuffix = style([
    dsPrimitives({
        gridArea: "suffix",
        flex: "1 1 auto",
        marginLeft: vars.spacing.xs,
        height: "100%",
    }),
]);
export const listElementDescription = style([
    dsPrimitives({
        gridArea: "description",
        marginTop: vars.spacing["2xs"],
    }),
]);
