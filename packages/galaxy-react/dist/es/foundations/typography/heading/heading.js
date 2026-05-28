import { jsx as a } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import "../../../primitives/icon/icon.js";
import "../../../primitives/illustration/illustration.js";
import "../../../primitives/input/input-description.js";
import "../../../primitives/input/input-error.js";
import "../../../primitives/input/input-field.js";
import "../../../primitives/input/input-group.js";
import "../../../primitives/input/input-label.js";
import "../../../primitives/input/input-left-addon.js";
import "../../../primitives/input/input-right-addon.js";
import "../../../primitives/input/input-root.js";
import "../../../primitives/link/link.js";
import "../../../primitives/loading-spinner/loading-spinner.js";
import "../../../primitives/logo/logo.js";
import "../../../primitives/progress-tracker/progress-tracker.js";
import "../../../primitives/title-input/title-input.js";
import "../../../primitives/toggle/toggle.js";
import { Box as f } from "../../layout/box/box.js";
import "../../layout/inline/inline.js";
import "../../layout/stack/stack.js";
import "../text/text.js";
import { combineClassNames as c } from "../../../utils/combine-class-names.js";
import { heading as d } from "../../../galaxy-styles/dist/typography/heading/heading.css.js";
const g = s(
  ({ level: o = 2, as: m, color: r, overflow: t, className: i, ...p }, n) => {
    const e = `h${o}`;
    return /* @__PURE__ */ a(
      f,
      {
        component: m ?? e,
        ...p,
        ref: n,
        className: c(d({ level: o, color: r, overflow: t }), i)
      }
    );
  }
);
g.displayName = "Heading";
export {
  g as Heading
};
