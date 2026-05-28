"use client";
import { jsx as i, jsxs as C } from "react/jsx-runtime";
import { forwardRef as D, useId as E } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
import "../illustration/illustration.js";
import { InputDescription as g } from "./input-description.js";
import { InputError as j } from "./input-error.js";
import "./input-field.js";
import "./input-group.js";
import { InputLabel as w } from "./input-label.js";
import "./input-left-addon.js";
import "./input-right-addon.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as F } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as L } from "../../utils/combine-class-names.js";
import { InputRootContextProvider as M } from "./input-root.context.js";
import { inputRoot as P } from "../../galaxy-styles/dist/input/input-root.css.js";
const _ = D(
  ({
    children: a,
    id: l,
    as: f,
    label: m,
    required: p,
    requiredText: I,
    description: r,
    tooltip: u,
    error: o,
    className: h,
    width: v,
    ...b
  }, R) => {
    const x = f ?? "div", $ = L(P({ width: v }), h), y = E(), t = l ?? y, N = t, n = m ? `${t}-label` : void 0, s = r ? `${t}-description` : void 0, e = o ? `${t}-error` : void 0, c = !!o && typeof o != "boolean", d = `${c ? e : ""} ${!!r ? s : ""}`, B = d.trim().length > 0 ? d.trim() : void 0;
    return /* @__PURE__ */ i(
      M,
      {
        value: {
          describedBy: B,
          inputId: N,
          labelId: n,
          hasError: !!o,
          required: p
        },
        children: /* @__PURE__ */ C(
          F,
          {
            ...b,
            className: $,
            component: x,
            ref: R,
            children: [
              !!m && /* @__PURE__ */ i(
                w,
                {
                  required: p,
                  requiredText: I,
                  htmlFor: t,
                  id: n,
                  tooltip: u,
                  children: m
                }
              ),
              a,
              !!r && /* @__PURE__ */ i(g, { id: s, children: r }),
              !!c && /* @__PURE__ */ i(j, { id: e, children: o })
            ]
          }
        )
      }
    );
  }
);
_.displayName = "Input.Root";
export {
  _ as InputRoot
};
