"use client";
import { jsx as l } from "react/jsx-runtime";
import { useMemo as M } from "react";
import { DayPicker as D } from "react-day-picker";
import { combineClassNames as o } from "../../utils/combine-class-names.js";
import { CalendarDefaultDayButton as y } from "./calendar-default-day-button.js";
import { CalendarDefaultMonthCaption as v } from "./calendar-default-month-caption.js";
import { CalendarDefaultNextButton as B } from "./calendar-default-next-button.js";
import { CalendarDefaultPrevButton as x } from "./calendar-default-prev-button.js";
import { CalendarDefaultWeekday as c } from "./calendar-default-weekday.js";
import { getDefaultMonth as g } from "./util.js";
import { calendar as k, calendarMonthGrid as P, calendarMonths as b, calendarMonth as G, calendarDay as W, calendarNav as _ } from "../../galaxy-styles/dist/calendar/calendar.css.js";
import { baseReset as n } from "../../galaxy-styles/dist/tokens/reset.css.js";
const j = ({
  className: a,
  classNames: t,
  components: d,
  ...r
}) => {
  const { selected: e } = r, i = M(() => g(e), [e]), f = o(n, k, a), h = o(
    n,
    P,
    t == null ? void 0 : t.month_grid
  ), m = o(
    n,
    b,
    t == null ? void 0 : t.months
  ), u = o(
    n,
    G,
    t == null ? void 0 : t.month
  ), C = o(
    n,
    W,
    t == null ? void 0 : t.day
  ), p = o(
    n,
    _,
    t == null ? void 0 : t.nav
  );
  return /* @__PURE__ */ l(
    D,
    {
      defaultMonth: i,
      ...r,
      showOutsideDays: !1,
      className: f,
      classNames: {
        ...t,
        month_grid: h,
        months: m,
        month: u,
        day: C,
        nav: p
      },
      components: {
        MonthCaption: v,
        Weekday: c,
        DayButton: y,
        PreviousMonthButton: x,
        NextMonthButton: B,
        ...d
      }
    }
  );
};
j.displayName = "Calendar";
export {
  j as Calendar
};
