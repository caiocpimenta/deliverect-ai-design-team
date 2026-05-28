import { jsxs as g, jsx as r } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { Inline as h } from "../../foundations/layout/inline/inline.js";
import { Stack as C } from "../../foundations/layout/stack/stack.js";
import { LoadingSpinner as M } from "../../primitives/loading-spinner/loading-spinner.js";
import { combineClassNames as R } from "../../utils/combine-class-names.js";
import { NavigationHeading as w } from "../navigation/navigation-heading.js";
import "../navigation/navigation-item.js";
import { NavigationList as x } from "../navigation/navigation-list.js";
import { NavigationRoot as P } from "../navigation/navigation-root.js";
import "../navigation/navigation-subitem.js";
import "../navigation/navigation-subtitle.js";
import { ProductMenuSection as S } from "./product-menu-section.js";
import { productMenuRoot as j, productMenuContentWrapper as v } from "../../galaxy-styles/dist/product-menu/product-menu-root.css.js";
const y = N(
  ({
    title: i,
    environment: o = "production",
    config: e,
    isLoading: n,
    className: m,
    leading: p = null,
    trailing: a = null,
    ...c
  }, s) => {
    const u = R(j, m);
    return /* @__PURE__ */ g(
      P,
      {
        environment: o,
        ...c,
        ref: s,
        className: u,
        children: [
          /* @__PURE__ */ r(w, { environment: o, children: i }),
          p,
          /* @__PURE__ */ r(C, { className: v, children: n ? /* @__PURE__ */ r(x, { children: /* @__PURE__ */ r(h, { width: "full", alignX: "center", children: /* @__PURE__ */ r(M, { status: "primary", size: "300" }) }) }) : e.map(
            ({ title: t, items: l, ...d }, f) => /* @__PURE__ */ r(
              S,
              {
                title: t,
                items: l,
                ...d
              },
              `product-menu-section-${t ?? f}`
            )
          ) }),
          a
        ]
      }
    );
  }
);
y.displayName = "ProductMenu";
export {
  y as ProductMenuRoot
};
