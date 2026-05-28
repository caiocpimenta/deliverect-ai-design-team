"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import "../../foundations/layout/box/box.js";
import { Inline as t } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
const m = i(
  ({ children: e, ...r }, a) => /* @__PURE__ */ o(
    t,
    {
      space: "xs",
      width: "full",
      alignX: "spaceBetween",
      ...r,
      ref: a,
      children: e
    }
  )
);
m.displayName = "PageHeader.Header";
export {
  m as PageHeaderHeader
};
