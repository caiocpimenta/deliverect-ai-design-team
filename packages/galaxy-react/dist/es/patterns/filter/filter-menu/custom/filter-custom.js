"use client";
import { jsx as l } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { useClearFilter as n } from "../filter-menu.context.js";
import { FilterMenuTag as p } from "../filter-menu.tag.js";
const a = f(
  ({ id: o, icon: t, tagLabel: e, onValueClear: r, ...i }, m) => {
    const s = n(o, r);
    return /* @__PURE__ */ l(
      p,
      {
        label: e,
        Icon: t,
        ...r !== void 0 && { onDismiss: s },
        ...i,
        ref: m
      }
    );
  }
);
a.displayName = "Filter.Custom";
export {
  a as FilterCustom
};
