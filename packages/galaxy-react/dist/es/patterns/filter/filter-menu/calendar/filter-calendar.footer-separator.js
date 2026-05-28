"use client";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import * as i from "@radix-ui/react-separator";
import { combineClassNames as m } from "../../../../utils/combine-class-names.js";
import { filterCalendarFooterSeparator as s } from "../../../../galaxy-styles/dist/filter/filter-calendar.css.js";
import { baseReset as l } from "../../../../galaxy-styles/dist/tokens/reset.css.js";
const p = t(({ className: r }, o) => {
  const e = m(
    l,
    s,
    r
  );
  return /* @__PURE__ */ a(
    i.Root,
    {
      className: e,
      decorative: !0,
      orientation: "horizontal",
      ref: o
    }
  );
});
p.displayName = "Filter.CalendarFooterSeparator";
export {
  p as FilterCalendarFooterSeparator
};
