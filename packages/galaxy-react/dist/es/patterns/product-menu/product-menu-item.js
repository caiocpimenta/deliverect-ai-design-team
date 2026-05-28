import { jsx as r } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import "../navigation/navigation-heading.js";
import { NavigationItem as g } from "../navigation/navigation-item.js";
import { NavigationList as s } from "../navigation/navigation-list.js";
import "../navigation/navigation-root.js";
import { NavigationSubitem as I } from "../navigation/navigation-subitem.js";
import "../navigation/navigation-subtitle.js";
import { getIsOpen as N } from "./util.js";
const h = l(
  ({
    as: i,
    isActive: t,
    subitems: o = [],
    label: n,
    Icon: e,
    ActiveIcon: p,
    trailing: a,
    ...f
  }, c) => {
    const d = i ?? "a", u = N(t, o);
    return /* @__PURE__ */ r(
      g,
      {
        as: d,
        isActive: t,
        isOpen: u,
        Icon: e,
        ActiveIcon: p,
        label: n,
        trailing: a,
        ...f,
        ref: c,
        children: !!o.length && /* @__PURE__ */ r(s, { variant: "sub", children: o.map((m) => /* @__PURE__ */ r(
          I,
          {
            ...m
          },
          `product-menu-subitem-${m.label}`
        )) })
      }
    );
  }
);
h.displayName = "ProductMenu.Item";
export {
  h as ProductMenuItem
};
