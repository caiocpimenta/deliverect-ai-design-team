"use client";
import { jsxs as j, jsx as a } from "react/jsx-runtime";
import { forwardRef as k, useRef as O, useState as n, useLayoutEffect as _ } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
import "../illustration/illustration.js";
import "../input/input-description.js";
import "../input/input-error.js";
import "../input/input-field.js";
import "../input/input-group.js";
import "../input/input-label.js";
import "../input/input-left-addon.js";
import "../input/input-right-addon.js";
import "../input/input-root.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../toggle/toggle.js";
import { Box as h } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import { Heading as l } from "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { separateSprinklesFromProps as y } from "../../utils/separate-sprinkles-from-props.js";
import { titleInput as B, titleInputContainer as F, titleInputHiddenContent as S } from "../../galaxy-styles/dist/title-input/title-input.css.js";
const c = {
  pageHeader: 2,
  modal: 3
}, Y = k(
  ({
    status: u = "default",
    titleStyle: r = "modal",
    value: m,
    defaultValue: d,
    onChange: i,
    onValueChange: o,
    placeholder: e,
    className: I,
    wrapperClassName: N,
    ...v
  }, x) => {
    const s = O(null), [E, L] = n(m ?? d ?? ""), [T, w] = n(0), p = m ?? E, { sprinkleProps: H, nativeProps: P } = y(v), R = f(B({ status: u }), I), W = f(
      F,
      N
    ), b = (t) => {
      L(t.target.value), o == null || o(t.target.value), i == null || i(t);
    };
    return _(() => {
      var t;
      w(((t = s.current) == null ? void 0 : t.offsetWidth) ?? 0);
    }, [p, r]), /* @__PURE__ */ j(h, { className: W, ...H, children: [
      /* @__PURE__ */ a(
        l,
        {
          as: "span",
          ref: s,
          level: c[r],
          className: S,
          children: p || e
        }
      ),
      /* @__PURE__ */ a(
        l,
        {
          ...P,
          level: c[r],
          as: "input",
          color: "inherit",
          className: R,
          placeholder: e,
          value: p,
          onChange: b,
          style: { width: T },
          ref: x
        }
      )
    ] });
  }
);
Y.displayName = "TitleInput";
export {
  Y as TitleInput
};
