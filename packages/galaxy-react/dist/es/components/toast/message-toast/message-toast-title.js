import { jsx as t } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import * as e from "@radix-ui/react-toast";
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
import "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import { Text as a } from "../../../foundations/typography/text/text.js";
import { combineClassNames as l } from "../../../utils/combine-class-names.js";
import { useToastContext as f } from "../shared/toast-context.js";
import { messageToastTitle as T } from "../../../galaxy-styles/dist/toast/message-toast.css.js";
const n = s(
  ({ className: o, ...m }, r) => {
    const { status: i } = f(), p = l(
      T({ status: i }),
      o
    );
    return /* @__PURE__ */ t(e.Title, { asChild: !0, ref: r, children: /* @__PURE__ */ t(
      a,
      {
        size: "md",
        overflow: !1,
        weight: "medium",
        className: p,
        ...m
      }
    ) });
  }
);
n.displayName = "MessageToast.Title";
export {
  n as MessageToastTitle
};
