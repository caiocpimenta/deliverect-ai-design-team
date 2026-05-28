import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens";
import { dsComponents, dsPrimitives } from "../layers.css";
const CALENDAR_NAV_HEIGHT = "2rem";
const CALENDAR_WIDTH = "15rem";
const CALENDAR_WIDTH_EXTENDED = "17rem";
export const calendarNav = style(dsPrimitives({
    position: "absolute",
    height: CALENDAR_NAV_HEIGHT,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
}));
export const calendarMonth = style(dsPrimitives({
    maxWidth: CALENDAR_WIDTH,
    selectors: {
        '[data-week-numbers="true"] &': {
            maxWidth: CALENDAR_WIDTH_EXTENDED,
        },
    },
}));
export const calendarDay = style(dsPrimitives({
    width: vars.sizing[300],
    height: vars.sizing[300],
}));
const calendarDayButtonTypeVariants = {
    standalone: {},
    rangeStart: dsPrimitives({
        borderTopRightRadius: vars.border.radius["none"],
        borderBottomRightRadius: vars.border.radius["none"],
    }),
    rangeMiddle: dsPrimitives({
        borderRadius: vars.border.radius["none"],
        color: vars.colors.text.neutral.interactive.default,
        backgroundColor: vars.colors.fill.neutral.interactive.bold.default,
        ":hover": {
            color: vars.colors.text.neutral.interactive.hover,
            backgroundColor: vars.colors.fill.neutral.interactive.bold.hover,
        },
        ":active": {
            color: vars.colors.text.neutral.interactive.active,
            backgroundColor: vars.colors.fill.neutral.interactive.bold.active,
        },
    }),
    rangeEnd: dsPrimitives({
        borderTopLeftRadius: vars.border.radius["none"],
        borderBottomLeftRadius: vars.border.radius["none"],
    }),
};
export const calendarDayButton = recipe({
    base: dsPrimitives({
        justifyContent: "center",
        width: "100%",
    }),
    variants: {
        type: calendarDayButtonTypeVariants,
    },
    defaultVariants: {
        type: "standalone",
    },
});
export const calendarMonthCaption = style(dsPrimitives({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: CALENDAR_NAV_HEIGHT,
}));
export const calendarMonths = style(dsPrimitives({
    position: "relative",
    selectors: {
        '[data-multiple-months="true"] &': {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            gap: vars.spacing["150"],
        },
    },
}));
export const calendarMonthGrid = style(dsPrimitives({
    borderCollapse: "collapse",
    width: "100%",
    tableLayout: "fixed",
    marginTop: vars.spacing["100"],
}));
export const calendar = style(dsComponents({
    width: "fit-content",
    padding: vars.spacing["150"],
    zIndex: vars.zIndexes.floatingPanel,
    borderRadius: vars.border.radius["100"],
    backgroundColor: vars.colors.fill.neutral.default.default,
    border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.default.default}`,
    selectors: {
        '[data-multiple-months="true"]:not([data-week-numbers="true"])&': {
            minWidth: `calc(${CALENDAR_WIDTH} * 2)`,
        },
        '[data-multiple-months="true"][data-week-numbers="true"]&': {
            minWidth: `calc(${CALENDAR_WIDTH_EXTENDED} * 2)`,
        },
    },
}));
