import { jsx as t } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import * as i from "@radix-ui/react-dropdown-menu";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as n } from "../../primitives/button/button.js";
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
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import { elementResets as a, baseReset as g } from "../../galaxy-styles/dist/tokens/reset.css.js";
const u = m((r, o) => /* @__PURE__ */ t(i.Trigger, { asChild: !0, ref: o, children: /* @__PURE__ */ t(n, { ...r }) }));
u.displayName = "DropdownMenu.ButtonTrigger";
const d = m(({ className: r, ...o }, p) => {
  const e = s(
    g,
    a.button,
    r
  );
  return /* @__PURE__ */ t(
    i.Trigger,
    {
      ...o,
      className: e,
      ref: p
    }
  );
});
d.displayName = "DropdownMenu.Trigger";
export {
  u as DropdownMenuButtonTrigger,
  d as DropdownMenuTrigger
};
