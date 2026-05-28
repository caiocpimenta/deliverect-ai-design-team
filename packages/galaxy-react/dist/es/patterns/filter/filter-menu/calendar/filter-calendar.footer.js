"use client";
import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { Footer as i } from "react-day-picker";
import { combineClassNames as s } from "../../../../utils/combine-class-names.js";
import { FilterCalendarFooterApply as n } from "./filter-calendar.footer-apply.js";
import { FilterCalendarFooterSeparator as p } from "./filter-calendar.footer-separator.js";
import { filterCalendarFooter as F } from "../../../../galaxy-styles/dist/filter/filter-calendar.css.js";
import { baseReset as f } from "../../../../galaxy-styles/dist/tokens/reset.css.js";
const d = ({
  applyLabel: e,
  onValueApplyChange: o,
  className: t,
  ...a
}) => {
  const l = s(
    f,
    F,
    t
  );
  return /* @__PURE__ */ m(i, { ...a, className: l, children: [
    /* @__PURE__ */ r(p, {}),
    /* @__PURE__ */ r(
      n,
      {
        applyLabel: e,
        onValueApplyChange: o
      }
    )
  ] });
};
d.displayName = "Filter.CalendarFooter";
export {
  d as FilterCalendarFooter
};
