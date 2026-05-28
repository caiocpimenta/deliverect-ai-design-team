import { jsx as p } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as a } from "../../primitives/button/button.js";
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
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { tabsAction as n } from "../../galaxy-styles/dist/tabs/tabs-action.css.js";
import { baseReset as c } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = s(
  (o, t) => {
    const { className: m, children: r } = o, i = e(c, n, m);
    return /* @__PURE__ */ p(
      a,
      {
        className: i,
        ref: t,
        type: "button",
        ...o,
        children: r
      }
    );
  }
);
f.displayName = "Tabs.Action";
export {
  f as TabsAction
};
