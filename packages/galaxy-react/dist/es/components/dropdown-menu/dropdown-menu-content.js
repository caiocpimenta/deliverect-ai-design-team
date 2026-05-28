import { jsx as o } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import * as n from "@radix-ui/react-dropdown-menu";
import { combineClassNames as i } from "../../utils/combine-class-names.js";
import { dropdownMenu as f } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu.css.js";
import { baseReset as c } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = 8, u = "start", w = d(
  ({
    children: r,
    className: t,
    sideOffset: e = l,
    align: m = u,
    ...s
  }, a) => {
    const p = i(
      c,
      f,
      t
    );
    return /* @__PURE__ */ o(n.Portal, { children: /* @__PURE__ */ o(
      n.Content,
      {
        ...s,
        sideOffset: e,
        align: m,
        className: p,
        ref: a,
        children: r
      }
    ) });
  }
);
w.displayName = "DropdownMenu.Content";
export {
  w as DropdownMenuContent
};
