import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents } from "../layers.css";
export const filterCalendarContentWrapper = style([
    dsComponents({
        padding: vars.spacing["0"],
        maxWidth: "fit-content",
    }),
]);
export const filterCalendar = style([
    dsComponents({
        border: "none",
    }),
]);
export const filterCalendarFooter = style(dsComponents({
    display: "flex",
    flexDirection: "column",
}));
export const filterCalendarFooterButton = style(dsComponents({
    alignSelf: "flex-end",
}));
export const filterCalendarFooterSeparator = style(dsComponents({
    height: vars.sizing["0"],
    border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.divider}`,
    marginTop: vars.spacing["150"],
}));
