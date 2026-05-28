"use client";
import { jsx as c } from "react/jsx-runtime";
import { createContext as d, useContext as u, useMemo as l } from "react";
const s = d({
  size: "md",
  display: "string",
  finalValue: void 0,
  finalOnValueChange: () => {
  }
}), a = ({
  size: e,
  display: o,
  finalValue: t,
  finalOnValueChange: n,
  children: m,
  ...r
}) => {
  const i = l(
    () => ({
      size: e,
      display: o,
      finalValue: t,
      finalOnValueChange: n,
      ...r
    }),
    [e, o, t, n, r]
  );
  return /* @__PURE__ */ c(s.Provider, { value: i, children: m });
}, g = () => {
  const e = u(s);
  if (!e)
    throw new Error(
      "Please use this component inside a SegmentedControl.Root component"
    );
  return e;
};
export {
  a as SegmentedControlProvider,
  g as useSegmentedControlContext
};
