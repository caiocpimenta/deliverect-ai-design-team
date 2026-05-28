import { jsx as p } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import * as t from "@radix-ui/react-dropdown-menu";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { dropdownMenuSeparator as s } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu.css.js";
import { baseReset as d } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = m(({ className: o, ...r }, a) => {
  const e = n(
    d,
    s,
    o
  );
  return /* @__PURE__ */ p(
    t.Separator,
    {
      ...r,
      className: e,
      ref: a
    }
  );
});
f.displayName = "DropdownMenu.Separator";
export {
  f as DropdownMenuSeparator
};
