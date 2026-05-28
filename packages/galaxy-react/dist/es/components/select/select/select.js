"use client";
import { jsxs as U, jsx as o } from "react/jsx-runtime";
import { useState as u, useEffect as V, useMemo as f } from "react";
import * as v from "@radix-ui/react-popover";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as W } from "../../../primitives/button/button.js";
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
import { Inline as X } from "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import { Text as I } from "../../../foundations/typography/text/text.js";
import { useInputRootContext as Y } from "../../../primitives/input/input-root.context.js";
import { combineClassNames as y } from "../../../utils/combine-class-names.js";
import { SelectItem as Z } from "../shared/select-item.js";
import _ from "../shared/select-popover.js";
import ee from "../shared/select-right-icon.js";
import { selectLabel as te, selectButton as re, selectTrigger as oe } from "../../../galaxy-styles/dist/select/select.css.js";
import { baseReset as le } from "../../../galaxy-styles/dist/tokens/reset.css.js";
const Ae = ({
  options: s = [],
  selectedOption: d,
  setSelectedOption: h,
  onOptionCleared: a,
  formatOption: x = (t) => t.label,
  formatSelectedOption: R = (t) => t.label,
  isOpen: m = !1,
  isClearable: b = !1,
  isAutoClose: k = !0,
  label: w = "",
  placeholder: E = "",
  contentEmpty: L = "",
  isSearchable: N = !1,
  id: T,
  name: O,
  className: j,
  status: B = "default",
  variant: P = "default",
  isDisabled: Q = !1,
  position: $ = "bottom",
  align: q = "start"
}) => {
  const t = Y(), F = t != null && t.hasError ? "critical" : B, M = (t == null ? void 0 : t.inputId) ?? T, [g, i] = u(m);
  V(() => i(m), [m]);
  const [S, z] = u(), l = f(
    () => d ?? S,
    [d, S]
  ), c = f(
    () => h ?? z,
    [h]
  ), C = !!l, A = b && C, [n, D] = u(""), p = f(() => {
    try {
      const e = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), r = new RegExp(e, "i");
      return s.filter((K) => r.test(K.label));
    } catch {
      return s.filter(
        (r) => r.label.toLowerCase().includes(n.toLowerCase())
      );
    }
  }, [s, n]), G = (e) => {
    D(e);
  }, H = (e, r) => {
    r && !b || (r ? c() : c(e), k && i(!1));
  }, J = () => {
    i(!1), c(), a == null || a();
  };
  return /* @__PURE__ */ U(v.Root, { open: g, onOpenChange: i, children: [
    /* @__PURE__ */ o(
      v.Trigger,
      {
        className: y(le, oe),
        asChild: !0,
        children: /* @__PURE__ */ o(
          W,
          {
            status: "neutral",
            variant: "outline",
            disabled: Q,
            id: M,
            name: O,
            role: "combobox",
            value: l == null ? void 0 : l.value,
            "aria-expanded": g,
            "aria-invalid": !!(t != null && t.hasError),
            onClick: () => i((e) => !e),
            TrailingIcon: /* @__PURE__ */ o(
              ee,
              {
                isClearable: A,
                onClearClick: J
              }
            ),
            className: y(re({ status: F, variant: P }), j),
            children: /* @__PURE__ */ o(X, { space: "xs", wrap: !0, children: C ? /* @__PURE__ */ o(I, { color: "default", children: R(l) }) : /* @__PURE__ */ o(I, { color: "placeholder", className: te, children: w }) })
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      _,
      {
        onInputChange: G,
        isSearchable: N,
        placeholder: E,
        contentEmpty: L,
        position: $,
        align: q,
        children: p == null ? void 0 : p.map((e) => {
          const r = l === e;
          return /* @__PURE__ */ o(
            Z,
            {
              value: e.value,
              onSelect: () => H(e, r),
              children: x(e, r)
            },
            e.value
          );
        })
      }
    )
  ] });
};
export {
  Ae as Select
};
