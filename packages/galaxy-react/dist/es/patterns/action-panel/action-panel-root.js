import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import * as t from "@radix-ui/react-toast";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { actionPanelRoot as f } from "../../galaxy-styles/dist/action-panel/action-panel-root.css.js";
import { actionPanelViewPort as d } from "../../galaxy-styles/dist/action-panel/action-panel-viewport.css.js";
import { baseReset as i } from "../../galaxy-styles/dist/tokens/reset.css.js";
const w = c(
  ({ className: e, ...r }, p) => {
    const l = n(
      i,
      f,
      e
    ), s = n(
      i,
      d,
      e
    );
    return /* @__PURE__ */ m(t.Provider, { label: "ActionPanel", duration: 1 / 0, children: [
      /* @__PURE__ */ a(
        t.Root,
        {
          className: l,
          ...r,
          ref: p,
          "data-testid": "action-panel-root",
          duration: 1 / 0,
          onEscapeKeyDown: (o) => o.preventDefault(),
          onSwipeStart: (o) => o.preventDefault(),
          onSwipeMove: (o) => o.preventDefault(),
          onSwipeEnd: (o) => o.preventDefault(),
          onSwipeCancel: (o) => o.preventDefault()
        }
      ),
      /* @__PURE__ */ a(
        t.Viewport,
        {
          className: s,
          "data-testid": "action-panel-viewport"
        }
      )
    ] });
  }
);
w.displayName = "ActionPanel.Root";
export {
  w as ActionPanelRoot
};
