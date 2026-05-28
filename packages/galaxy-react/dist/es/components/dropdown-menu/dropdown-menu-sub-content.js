import { jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as n from "@radix-ui/react-dropdown-menu";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { dropdownMenu as u } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu.css.js";
const d = 4, i = a(
  ({
    sideOffset: r = d,
    className: t,
    ...e
  }, m) => {
    const s = p(t, u);
    return /* @__PURE__ */ o(n.Portal, { children: /* @__PURE__ */ o(
      n.SubContent,
      {
        ...e,
        ref: m,
        className: s,
        sideOffset: r
      }
    ) });
  }
);
i.displayName = "DropdownMenu.SubContent";
export {
  i as DropdownMenuSubContent
};
