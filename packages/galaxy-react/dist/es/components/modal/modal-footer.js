import { jsx as p } from "react/jsx-runtime";
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
import { Inline as a } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import { modalFooter as l } from "../../galaxy-styles/dist/modal/modal-footer.css.js";
import { baseReset as f } from "../../galaxy-styles/dist/tokens/reset.css.js";
const d = e(
  ({ children: o, className: r, ...m }, t) => {
    const i = s(
      f,
      l,
      r
    );
    return /* @__PURE__ */ p(
      a,
      {
        alignX: "right",
        space: "xs",
        padding: "lg",
        ...m,
        ref: t,
        className: i,
        children: o
      }
    );
  }
);
d.displayName = "Modal.Footer";
export {
  d as ModalFooter
};
