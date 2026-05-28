import { jsx as r } from "react/jsx-runtime";
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import "../../foundations/typography/heading/heading.js";
import { Text as m } from "../../foundations/typography/text/text.js";
import { baseReset as i } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = ({
  children: a,
  className: e,
  ...o
}) => {
  const t = s(i, e);
  return /* @__PURE__ */ r("th", { className: t, ...o, children: /* @__PURE__ */ r(
    m,
    {
      size: "sm",
      color: "secondary",
      weight: "regular",
      align: "center",
      p: "2xs",
      className: e,
      children: a
    }
  ) });
};
l.displayName = "Calendar.DefaultWeekday";
export {
  l as CalendarDefaultWeekday
};
