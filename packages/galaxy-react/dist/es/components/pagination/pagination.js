"use client";
import { jsxs as a, jsx as i } from "react/jsx-runtime";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as m } from "../../primitives/button/button.js";
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
import { ChevronDirectionLeft as C } from "../../foundations/icons/chevron-direction-left.js";
import { ChevronDirectionRight as D } from "../../foundations/icons/chevron-direction-right.js";
import { ChevronDoubleDirectionLeft as I } from "../../foundations/icons/chevron-double-direction-left.js";
import { ChevronDoubleDirectionRight as k } from "../../foundations/icons/chevron-double-direction-right.js";
import "../../foundations/layout/box/box.js";
import { Inline as p } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as w } from "../../foundations/typography/text/text.js";
import { defaultShowElementRange as M } from "./default-show-element-range.js";
const mi = ({
  total: r,
  page: t,
  pageSize: n,
  subject: s,
  onPageChange: o,
  showElementRange: l = M,
  itemRangeLabel: c = "Showing items",
  firstPageLabel: d = "First",
  previousPageLabel: h = "Previous",
  nextPageLabel: b = "Next",
  lastPageLabel: f = "Last",
  ...x
}) => {
  const g = Math.min((t - 1) * n + 1, r), z = Math.min(t * n, r), e = Math.max(Math.ceil(r / n), 1);
  return /* @__PURE__ */ a(
    p,
    {
      width: "auto",
      space: "100",
      component: "nav",
      "aria-label": "pagination",
      ...x,
      children: [
        /* @__PURE__ */ i(w, { "aria-label": c, children: l(g, z, r, s) }),
        /* @__PURE__ */ a(p, { width: "auto", children: [
          /* @__PURE__ */ i(
            m,
            {
              size: "xs",
              Icon: /* @__PURE__ */ i(I, { size: "lg" }),
              "aria-label": d,
              variant: "transparent",
              disabled: t === 1,
              onClick: () => o(1)
            }
          ),
          /* @__PURE__ */ i(
            m,
            {
              size: "xs",
              Icon: /* @__PURE__ */ i(C, { size: "lg" }),
              "aria-label": h,
              variant: "transparent",
              disabled: t === 1,
              onClick: () => o(t - 1)
            }
          ),
          /* @__PURE__ */ i(
            m,
            {
              size: "xs",
              Icon: /* @__PURE__ */ i(D, { size: "lg" }),
              "aria-label": b,
              variant: "transparent",
              disabled: t === e,
              onClick: () => o(t + 1)
            }
          ),
          /* @__PURE__ */ i(
            m,
            {
              size: "xs",
              Icon: /* @__PURE__ */ i(k, { size: "lg" }),
              "aria-label": f,
              variant: "transparent",
              disabled: t === e,
              onClick: () => o(e)
            }
          )
        ] })
      ]
    }
  );
};
export {
  mi as Pagination
};
