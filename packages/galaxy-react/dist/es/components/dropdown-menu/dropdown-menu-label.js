import { jsx as a } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import * as s from "@radix-ui/react-dropdown-menu";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { dropdownMenuLabel as t } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu.css.js";
import { baseReset as d } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = n(
  ({ className: o, ...r }, e) => {
    const m = p(
      d,
      t,
      o
    );
    return /* @__PURE__ */ a(
      s.Label,
      {
        ...r,
        className: m,
        ref: e
      }
    );
  }
);
l.displayName = "DropdownMenu.Label";
export {
  l as DropdownMenuLabel
};
