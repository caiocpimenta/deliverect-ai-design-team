import { jsx as o } from "react/jsx-runtime";
import { MonthCaption as m } from "react-day-picker";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import "../../foundations/typography/heading/heading.js";
import { Text as i } from "../../foundations/typography/text/text.js";
import { calendarMonthCaption as p } from "../../galaxy-styles/dist/calendar/calendar.css.js";
import { baseReset as s } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = ({
  children: t,
  className: a,
  ...r
}) => {
  const e = n(
    s,
    p,
    a
  );
  return /* @__PURE__ */ o(m, { ...r, className: e, children: /* @__PURE__ */ o(i, { weight: "medium", children: t }) });
};
l.displayName = "Calendar.DefaultMonthCaption";
export {
  l as CalendarDefaultMonthCaption
};
