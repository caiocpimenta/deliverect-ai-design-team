import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import "../../primitives/icon/icon.js";
import "../../primitives/illustration/illustration.js";
import "../../primitives/input/input-description.js";
import "../../primitives/input/input-error.js";
import "../../primitives/input/input-field.js";
import "../../primitives/input/input-group.js";
import "../../primitives/input/input-label.js";
import "../../primitives/input/input-left-addon.js";
import "../../primitives/input/input-right-addon.js";
import "../../primitives/input/input-root.js";
import "../../primitives/link/link.js";
import "../../primitives/loading-spinner/loading-spinner.js";
import "../../primitives/logo/logo.js";
import "../../primitives/progress-tracker/progress-tracker.js";
import "../../primitives/title-input/title-input.js";
import "../../primitives/toggle/toggle.js";
import { ChevronDirectionDown as g } from "../../foundations/icons/chevron-direction-down.js";
import { ChevronDirectionUp as N } from "../../foundations/icons/chevron-direction-up.js";
import { Box as C } from "../../foundations/layout/box/box.js";
import { Inline as m } from "../../foundations/layout/inline/inline.js";
import { Stack as u } from "../../foundations/layout/stack/stack.js";
import { Text as b } from "../../foundations/typography/text/text.js";
import { combineClassNames as I } from "../../utils/combine-class-names.js";
import { navigationItem as w, navigationItemWrapper as D, navigationLabel as j } from "../../galaxy-styles/dist/navigation/navigation-item.css.js";
const B = ({ isOpen: t }) => t ? /* @__PURE__ */ r(N, { role: "img", "aria-label": "Chevron" }) : /* @__PURE__ */ r(g, { role: "img", "aria-label": "Chevron" }), k = x(
  ({
    label: t,
    Icon: a,
    ActiveIcon: n,
    isOpen: o,
    isActive: e,
    trailing: l,
    className: c,
    as: s,
    children: p,
    ...d
  }, f) => {
    const h = s ?? "a", v = I(
      w({ variant: "default" }),
      c
    );
    return /* @__PURE__ */ i(u, { className: D, component: "li", children: [
      /* @__PURE__ */ r(
        C,
        {
          component: h,
          tabIndex: 0,
          ...d,
          className: v,
          ref: f,
          "aria-expanded": o,
          "data-active": e || void 0,
          children: /* @__PURE__ */ i(m, { alignX: "spaceBetween", children: [
            /* @__PURE__ */ i(m, { space: "xs", children: [
              o || e ? n ?? a : a,
              /* @__PURE__ */ r(b, { className: j, children: t })
            ] }),
            /* @__PURE__ */ i(m, { width: "auto", space: "xs", "aria-hidden": !0, children: [
              l,
              !!p && /* @__PURE__ */ r(B, { isOpen: o })
            ] })
          ] })
        }
      ),
      o && p
    ] });
  }
);
k.displayName = "Navigation.Item";
export {
  k as NavigationItem
};
