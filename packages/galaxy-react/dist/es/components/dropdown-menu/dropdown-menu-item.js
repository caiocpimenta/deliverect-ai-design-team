import { jsxs as n, jsx as s } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as d from "@radix-ui/react-dropdown-menu";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import { Icon as f } from "../../primitives/icon/icon.js";
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
import { combineClassNames as l } from "../../utils/combine-class-names.js";
import { dropdownMenuItem as u } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu-item.css.js";
import { baseReset as I } from "../../galaxy-styles/dist/tokens/reset.css.js";
const c = a(
  ({ children: r, icon: o, status: m = "neutral", className: t, ...p }, i) => {
    const e = l(
      I,
      u({ status: m }),
      t
    );
    return /* @__PURE__ */ n(
      d.Item,
      {
        ...p,
        className: e,
        ref: i,
        children: [
          o !== void 0 && /* @__PURE__ */ s(f, { children: o }),
          r
        ]
      }
    );
  }
);
c.displayName = "DropdownMenu.Item";
export {
  c as DropdownMenuItem
};
