import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import "../../components/tooltip/tooltip-badge-trigger.js";
import { TooltipContent as h } from "../../components/tooltip/tooltip-content.js";
import { TooltipRoot as u } from "../../components/tooltip/tooltip-root.js";
import { TooltipTrigger as b } from "../../components/tooltip/tooltip-trigger.js";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import { Icon as T } from "../icon/icon.js";
import "../illustration/illustration.js";
import "./input-description.js";
import "./input-error.js";
import "./input-field.js";
import "./input-group.js";
import "./input-left-addon.js";
import "./input-right-addon.js";
import "./input-root.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { InfoOutline as x } from "../../foundations/icons/info-outline.js";
import { Inline as m } from "../../foundations/layout/inline/inline.js";
import { Text as p } from "../../foundations/typography/text/text.js";
import { inputLabelTooltip as I } from "../../galaxy-styles/dist/input/input-label.css.js";
const g = f(
  ({
    children: e,
    as: n,
    htmlFor: l,
    required: a,
    requiredText: s = "Required",
    tooltip: r,
    ...c
  }, d) => {
    const t = n ?? "label";
    return /* @__PURE__ */ i(m, { alignX: "spaceBetween", children: [
      /* @__PURE__ */ i(m, { space: "050", children: [
        /* @__PURE__ */ o(
          p,
          {
            size: "sm",
            weight: "medium",
            ...c,
            component: t,
            htmlFor: t === "label" ? l : void 0,
            ref: d,
            children: e
          }
        ),
        r && /* @__PURE__ */ i(u, { children: [
          /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(
            T,
            {
              as: "button",
              type: "button",
              "aria-label": r,
              className: I,
              children: /* @__PURE__ */ o(x, { "aria-hidden": "true" })
            }
          ) }),
          /* @__PURE__ */ o(h, { children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ o(p, { as: "span", size: "xs", color: "secondary", children: s })
    ] });
  }
);
g.displayName = "Input.Label";
export {
  g as InputLabel
};
