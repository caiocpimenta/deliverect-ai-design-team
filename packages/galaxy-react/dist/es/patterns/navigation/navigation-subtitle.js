import { jsxs as m, jsx as p } from "react/jsx-runtime";
import { forwardRef as e } from "react";
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
import "../../foundations/layout/box/box.js";
import { Inline as l } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as n } from "../../foundations/typography/text/text.js";
const a = e(
  ({ title: r, trailing: i, ...o }, t) => /* @__PURE__ */ m(l, { px: "100", ...o, children: [
    /* @__PURE__ */ p(
      n,
      {
        size: "sm",
        weight: "bold",
        color: "secondary",
        ref: t,
        width: "full",
        children: r
      }
    ),
    i
  ] })
);
a.displayName = "Navigation.Subtitle";
export {
  a as NavigationSubtitle
};
