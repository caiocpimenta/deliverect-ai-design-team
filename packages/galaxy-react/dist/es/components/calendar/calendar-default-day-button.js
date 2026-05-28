import { jsx as i } from "react/jsx-runtime";
import { Fragment as y } from "react";
import { useDayPicker as D } from "react-day-picker";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as d } from "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import "../../primitives/icon/icon.js";
import "../../primitives/illustration/illustration.js";
import "../../primitives/input/input-description.js";
import "../../primitives/input/input-error.js";
import "../../primitives/input/input-field.js";
import "../../primitives/input/input-group.js";
import "../../primitives/input/input-label.js";
import "../../primitives/input/input-left-addon.js";
import "../../primitives/input/input-right-addon.js";
import "../../primitives/input/input-root.js";
import "../../primitives/link/link.js";
import "../../primitives/loading-spinner/loading-spinner.js";
import "../../primitives/logo/logo.js";
import "../../primitives/progress-tracker/progress-tracker.js";
import "../../primitives/title-input/title-input.js";
import "../../primitives/toggle/toggle.js";
import { combineClassNames as B } from "../../utils/combine-class-names.js";
import "../../foundations/typography/heading/heading.js";
import { Text as C } from "../../foundations/typography/text/text.js";
import { getDayButtonTypeVariant as x, getDayButtonVariant as N } from "./calendar-default-day-button.util.js";
import { calendarDayButton as V } from "../../galaxy-styles/dist/calendar/calendar.css.js";
const g = ({
  day: t,
  modifiers: m,
  className: a,
  children: p,
  ...n
}) => {
  const { isSelected: o, select: r } = D(), e = (f) => {
    r == null || r(t.date, m, f);
  }, s = (o == null ? void 0 : o(t.date)) ?? !1, c = x(m), l = N(s), u = B(
    V({ type: c }),
    a
  );
  return t.outside ? /* @__PURE__ */ i(y, {}) : /* @__PURE__ */ i(
    d,
    {
      ...n,
      className: u,
      variant: l,
      onClick: e,
      children: /* @__PURE__ */ i(C, { size: "xs", color: "inherit", children: p })
    }
  );
};
g.displayName = "Calendar.DefaultDayButton";
export {
  g as CalendarDefaultDayButton
};
