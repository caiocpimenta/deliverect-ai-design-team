"use client";
import { jsxs as b, jsx as i, Fragment as tt } from "react/jsx-runtime";
import { useRef as E, useState as u, useEffect as H, useLayoutEffect as rt } from "react";
import * as T from "@radix-ui/react-popover";
import "../../chip/action-chip/action-chip.js";
import { InputChip as x } from "../../chip/input-chip/input-chip.js";
import "../../chip/selection-chip/selection-chip.js";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as ot } from "../../../primitives/button/button.js";
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
import { Inline as it } from "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import { Text as et } from "../../../foundations/typography/text/text.js";
import { useInputRootContext as nt } from "../../../primitives/input/input-root.context.js";
import { combineClassNames as M } from "../../../utils/combine-class-names.js";
import st from "../shared/select-popover.js";
import mt from "../shared/select-right-icon.js";
import { selectLabel as at, selectButton as lt, selectTrigger as pt } from "../../../galaxy-styles/dist/select/select.css.js";
import { baseReset as ct } from "../../../galaxy-styles/dist/tokens/reset.css.js";
const N = 30, qt = ({
  options: f = [],
  selectedOptions: o,
  onOptionToggle: k,
  onOptionsCleared: a,
  formatSelectedOption: j = (r) => r.label,
  onFilterOptions: h,
  maxSelectedOptions: d,
  moreSelectedOptionsLabel: l = (r) => `+ ${r}`,
  isOpen: p = !1,
  isClearable: w = !1,
  label: z = "",
  placeholder: B = "",
  contentEmpty: F = "",
  isSearchable: P = !1,
  id: S,
  name: A,
  className: D,
  status: G = "default",
  variant: U = "default",
  isDisabled: W = !1,
  position: X = "bottom",
  align: $ = "center",
  children: y
}) => {
  const r = nt(), J = r != null && r.hasError ? "critical" : G, K = (r == null ? void 0 : r.inputId) ?? S, g = E(null), v = E(o), [C, m] = u(p);
  H(() => m(p), [p]);
  const [Q, V] = u(f), I = !!o.length, Y = w && I, [e, c] = u(0), Z = e ? o.slice(0, -e) : [...o];
  rt(() => {
    var n;
    const t = ((n = g.current) == null ? void 0 : n.clientHeight) ?? 0;
    d === "auto" && t > N && c((s) => {
      if (t / N > 2) {
        const O = o.length - e;
        return s + Math.floor(O / 2);
      }
      return s + 1;
    });
  }, [o, e, d]), H(() => {
    const t = v.current.length - o.length;
    if (t > 0) {
      const n = t + 5;
      c((s) => Math.max(s - n, 0));
    }
    v.current = o;
  }, [o]);
  const q = (t) => {
    k(t, !1);
  }, R = (t) => {
    if (h)
      h(t);
    else {
      const n = new RegExp(t, "i");
      V(f.filter((s) => n.exec(s.label)));
    }
  }, _ = (t) => {
    R(""), m(t);
  }, L = () => {
    m(!1), c(0), a == null || a();
  };
  return /* @__PURE__ */ b(T.Root, { open: C, onOpenChange: _, children: [
    /* @__PURE__ */ i(
      T.Trigger,
      {
        className: M(ct, pt),
        asChild: !0,
        children: /* @__PURE__ */ i(
          ot,
          {
            status: "neutral",
            variant: "outline",
            disabled: W,
            id: (r == null ? void 0 : r.inputId) ?? K,
            name: A,
            role: "combobox",
            value: o.map((t) => t.value),
            "aria-expanded": C,
            "aria-invalid": !!(r != null && r.hasError),
            onClick: () => m((t) => !t),
            TrailingIcon: /* @__PURE__ */ i(
              mt,
              {
                isClearable: Y,
                onClearClick: L
              }
            ),
            className: M(lt({ status: J, variant: U }), D),
            children: /* @__PURE__ */ i(it, { space: "xs", wrap: !0, ref: g, children: I ? /* @__PURE__ */ b(tt, { children: [
              Z.map((t) => /* @__PURE__ */ i(
                x,
                {
                  size: "sm",
                  onDismiss: () => q(t),
                  children: j(t)
                },
                t.value
              )),
              !!e && /* @__PURE__ */ i(x, { size: "sm", children: l == null ? void 0 : l(e) })
            ] }) : /* @__PURE__ */ i(et, { color: "placeholder", className: at, children: z }) })
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      st,
      {
        onInputChange: R,
        isSearchable: P,
        placeholder: B,
        contentEmpty: F,
        position: X,
        align: $,
        children: y(Q)
      }
    )
  ] });
};
export {
  qt as MultiSelectRoot
};
