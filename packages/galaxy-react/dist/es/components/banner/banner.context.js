"use client";
import { jsx as o } from "react/jsx-runtime";
import { createContext as r, useContext as s } from "react";
const n = r({}), a = ({
  children: e,
  ...t
}) => /* @__PURE__ */ o(n.Provider, { value: t, children: e }), u = () => {
  const e = s(n);
  if (!e)
    throw new Error("Please use this component inside a Banner.Root component");
  return e;
};
export {
  a as BannerProvider,
  u as useBannerContext
};
