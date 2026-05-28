import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { Badge as m } from "../../components/badge/badge.js";
import { Inline as s } from "../../foundations/layout/inline/inline.js";
import { Heading as d } from "../../foundations/typography/heading/heading.js";
import { ENVIRONMENT_CONFIGS as p } from "./constants.js";
const l = ({ environment: r }) => {
  if (r === "production")
    return null;
  const { label: i, badgeStatus: o } = p[r];
  return /* @__PURE__ */ t(m, { variant: "dark", size: "sm", status: o, children: i });
}, f = n(
  ({ environment: r = "production", children: i, ...o }, a) => /* @__PURE__ */ e(s, { alignY: "center", pl: "md", pr: "xs", space: "sm", children: [
    /* @__PURE__ */ t(d, { level: 4, as: "h1", ...o, ref: a, children: i }),
    /* @__PURE__ */ t(l, { environment: r })
  ] })
);
f.displayName = "Navigation.Heading";
export {
  f as NavigationHeading
};
