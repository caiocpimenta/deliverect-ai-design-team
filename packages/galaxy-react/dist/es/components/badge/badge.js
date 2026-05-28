import { jsxs as g, jsx as f } from "react/jsx-runtime";
import { forwardRef as h } from "react";
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
import { Box as t } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as b } from "../../utils/combine-class-names.js";
import { lightBadgeIcon as B, darkBadgeIcon as N, badge as x, darkBadge as y } from "../../galaxy-styles/dist/badge/badge.css.js";
const C = h(
  ({
    status: o = "neutral",
    variant: r = "light",
    size: i,
    children: p,
    className: e,
    Icon: m,
    as: a,
    ...n
  }, s) => {
    const d = a ?? "span", l = b(
      (r === "light" ? x : y)({ status: o, size: i }),
      e
    ), c = r === "light" ? B({ status: o }) : N({ status: o });
    return /* @__PURE__ */ g(
      t,
      {
        component: d,
        className: l,
        ...n,
        ref: s,
        children: [
          !!m && /* @__PURE__ */ f(t, { component: "span", className: c, "aria-hidden": !0, children: m }),
          p
        ]
      }
    );
  }
);
C.displayName = "Badge";
export {
  C as Badge
};
