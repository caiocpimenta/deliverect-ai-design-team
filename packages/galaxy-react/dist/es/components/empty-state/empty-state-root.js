"use client";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { Stack as s } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as i } from "../../utils/combine-class-names.js";
import { emptyStateRoot as c } from "../../galaxy-styles/dist/empty-state/empty-state.css.js";
const f = p(
  ({ children: t, className: o, ...e }, m) => {
    const r = i(c, o);
    return /* @__PURE__ */ a(
      s,
      {
        space: "md",
        height: "auto",
        py: "3xl",
        alignX: "center",
        ...e,
        ref: m,
        className: r,
        children: t
      }
    );
  }
);
f.displayName = "EmptyState.Root";
export {
  f as EmptyStateRoot
};
