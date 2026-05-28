import { jsx as p } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import "../../components/dropdown-menu/dropdown-menu-checkbox-item.js";
import "../../components/dropdown-menu/dropdown-menu-content.js";
import "../../components/dropdown-menu/dropdown-menu-item.js";
import "../../components/dropdown-menu/dropdown-menu-label.js";
import "../../components/dropdown-menu/dropdown-menu-radio.js";
import "../../components/dropdown-menu/dropdown-menu-root.js";
import "../../components/dropdown-menu/dropdown-menu-scrollable.js";
import "../../components/dropdown-menu/dropdown-menu-separator.js";
import "../../components/dropdown-menu/dropdown-menu-single-select.js";
import "../../components/dropdown-menu/dropdown-menu-sub.js";
import "../../components/dropdown-menu/dropdown-menu-sub-content.js";
import "../../components/dropdown-menu/dropdown-menu-sub-trigger.js";
import { DropdownMenuButtonTrigger as a } from "../../components/dropdown-menu/dropdown-menu-trigger.js";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { sidebarDropdownTrigger as s } from "../../galaxy-styles/dist/sidebar/sidebar-dropdown-menu-trigger.css.js";
const d = e(({ children: r, className: o, ...i }, t) => {
  const m = n(
    s,
    o
  );
  return /* @__PURE__ */ p(
    a,
    {
      status: "neutral",
      variant: "ghost",
      padding: "2xs",
      ...i,
      ref: t,
      className: m,
      children: r
    }
  );
});
d.displayName = "SidebarDropdownMenu.Trigger";
export {
  d as SidebarDropdownMenuTrigger
};
