"use client";
import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import * as r from "@radix-ui/react-dropdown-menu";
import { combineClassNames as d } from "../../utils/combine-class-names.js";
import { dropdownMenuRadioItem as p } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu-radio-item.css.js";
import { radioGroupIndicator as u } from "../../galaxy-styles/dist/radio-group/radio-group-indicator.css.js";
import { radioGroupItem as c } from "../../galaxy-styles/dist/radio-group/radio-group-item.css.js";
import { baseReset as l } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = n(({ children: e, className: a, ...m }, s) => {
  const t = d(
    l,
    p({ justify: "start" }),
    a
  );
  return /* @__PURE__ */ i(
    r.RadioItem,
    {
      ...m,
      className: t,
      ref: s,
      children: [
        /* @__PURE__ */ o(r.ItemIndicator, { forceMount: !0, asChild: !0, children: /* @__PURE__ */ o("span", { className: c({ size: "sm", standalone: !0 }), children: /* @__PURE__ */ o("span", { className: u({ size: "sm" }) }) }) }),
        e
      ]
    }
  );
});
f.displayName = "DropdownMenu.RadioItem";
const I = r.RadioGroup;
I.displayName = "DropdownMenu.RadioGroup";
export {
  I as DropdownMenuRadioGroup,
  f as DropdownMenuRadioItem
};
