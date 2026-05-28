"use client";
import { jsx as v } from "react/jsx-runtime";
import { createContext as d, useCallback as i, useContext as m, useMemo as f } from "react";
const s = d(void 0), a = ({
  children: t,
  openFilterKey: e,
  setOpenFilterKey: r,
  setAppliedFilterKeys: o
}) => {
  const n = i(
    (l) => {
      o((x) => x.filter((F) => F !== l));
    },
    [o]
  ), c = f(
    () => ({
      openFilterKey: e,
      clearFilterKey: n,
      setOpenFilterKey: r
    }),
    [e, n, r]
  );
  return /* @__PURE__ */ v(s.Provider, { value: c, children: t });
}, u = () => {
  const t = m(s);
  if (!t)
    throw new Error("useFilterContext must be used within a FilterProvider.");
  return t;
}, w = (t, e) => {
  const { clearFilterKey: r } = u();
  return i(() => {
    r(t), e == null || e();
  }, [t, r, e]);
}, b = (t) => {
  const { openFilterKey: e, setOpenFilterKey: r } = u();
  return [
    e === t,
    (o) => r(o ? t : void 0)
  ];
};
export {
  a as FilterMenuProvider,
  w as useClearFilter,
  b as useToggleOpenFilter
};
