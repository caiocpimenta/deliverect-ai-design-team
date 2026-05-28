import { jsx as a } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import * as i from "@radix-ui/react-dialog";
import { combineClassNames as t } from "../../utils/combine-class-names.js";
import { baseReset as f } from "../../galaxy-styles/dist/tokens/reset.css.js";
const g = s(
  ({ className: r, ...o }, e) => {
    const m = t(f, r);
    return /* @__PURE__ */ a(
      i.Trigger,
      {
        ...o,
        className: m,
        ref: e
      }
    );
  }
);
g.displayName = "Modal.Trigger";
export {
  g as ModalTrigger
};
