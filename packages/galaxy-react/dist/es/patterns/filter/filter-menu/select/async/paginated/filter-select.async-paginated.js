"use client";
import { jsx as e } from "react/jsx-runtime";
import { FilterSelectAsyncContainer as l } from "../filter-select.async-container.js";
import { FilterSelectAsyncContentPaginated as o } from "./filter-select.async-content-paginated.js";
const a = ({
  id: t,
  icon: n,
  tagLabel: r,
  onValueClear: i,
  ...c
}) => /* @__PURE__ */ e(
  l,
  {
    id: t,
    icon: n,
    tagLabel: r,
    onValueClear: i,
    children: /* @__PURE__ */ e(o, { ...c })
  }
);
a.displayName = "Filter.SelectAsyncPaginated";
export {
  a as FilterSelectAsyncPaginated
};
