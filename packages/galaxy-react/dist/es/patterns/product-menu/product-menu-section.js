import { jsxs as e, jsx as r } from "react/jsx-runtime";
import "../navigation/navigation-heading.js";
import "../navigation/navigation-item.js";
import { NavigationList as n } from "../navigation/navigation-list.js";
import "../navigation/navigation-root.js";
import "../navigation/navigation-subitem.js";
import { NavigationSubtitle as u } from "../navigation/navigation-subtitle.js";
import { ProductMenuItem as a } from "./product-menu-item.js";
const j = ({
  title: o,
  trailing: i,
  items: m,
  ...p
}) => /* @__PURE__ */ e(n, { ...p, children: [
  o && /* @__PURE__ */ r(u, { title: o, trailing: i }),
  m.map((t) => /* @__PURE__ */ r(
    a,
    {
      ...t
    },
    `product-menu-item-${t.label}`
  ))
] });
export {
  j as ProductMenuSection
};
