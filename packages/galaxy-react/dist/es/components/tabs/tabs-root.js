import { jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as s from "@radix-ui/react-tabs";
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
import { Box as e } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { baseReset as n } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = a(
  ({ children: r, className: t = "", ...m }, i) => {
    const p = f(n, t);
    return /* @__PURE__ */ o(
      s.Root,
      {
        asChild: !0,
        className: p,
        ref: i,
        orientation: "horizontal",
        ...m,
        children: /* @__PURE__ */ o(e, { children: r })
      }
    );
  }
);
l.displayName = "Tabs.Root";
export {
  l as TabsRoot
};
