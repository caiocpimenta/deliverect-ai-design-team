import { jsxs as o, Fragment as e, jsx as n } from "react/jsx-runtime";
import "../../foundations/typography/heading/heading.js";
import { Text as a } from "../../foundations/typography/text/text.js";
const m = (s, t, c, r) => /* @__PURE__ */ o(e, { children: [
  s,
  "-",
  t,
  " ",
  /* @__PURE__ */ n(a, { as: "span", color: "secondary", children: "of" }),
  " ",
  c,
  r && /* @__PURE__ */ o(e, { children: [
    " ",
    /* @__PURE__ */ n(a, { as: "span", color: "secondary", children: r })
  ] })
] });
export {
  m as defaultShowElementRange
};
