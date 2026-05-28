import { jsx as e, Fragment as f } from "react/jsx-runtime";
import { Fragment as c } from "react";
import { isSingleFilterConfig as g } from "./util.js";
const F = ({
  configMap: n,
  appliedFilterKeys: i
}) => {
  const o = i.map((t) => {
    const [l, ...m] = t.split(".");
    let r = n[l];
    return m.forEach((s) => {
      r = r.filterConfigs[s];
    }), g(r) ? /* @__PURE__ */ e(c, { children: r.filter }, t) : null;
  });
  return /* @__PURE__ */ e(f, { children: o });
};
export {
  F as FilterMenuElements
};
