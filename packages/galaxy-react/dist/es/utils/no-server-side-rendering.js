"use client";
import { jsx as t, Fragment as o } from "react/jsx-runtime";
import { useState as s, useEffect as u } from "react";
const m = ({ children: e }) => {
  const [r, n] = s(!1);
  return u(() => {
    n(!0);
  }, []), r ? /* @__PURE__ */ t(o, { children: e }) : null;
};
export {
  m as NoServerSideRendering
};
