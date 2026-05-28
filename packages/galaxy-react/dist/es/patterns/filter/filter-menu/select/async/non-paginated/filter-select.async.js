"use client";
import { jsx as e } from "react/jsx-runtime";
import { FilterSelectAsyncContainer as l } from "../filter-select.async-container.js";
import { FilterSelectAsyncContent as o } from "./filter-select.async-content.js";
const s = ({
  id: t,
  icon: r,
  tagLabel: n,
  onValueClear: c,
  ...i
}) => /* @__PURE__ */ e(
  l,
  {
    id: t,
    icon: r,
    tagLabel: n,
    onValueClear: c,
    children: /* @__PURE__ */ e(o, { ...i })
  }
);
s.displayName = "Filter.SelectAsync";
export {
  s as FilterSelectAsync
};
