"use client";
import { jsx as s } from "react/jsx-runtime";
import { forwardRef as b, useId as I, useState as N, useMemo as a } from "react";
import * as S from "@radix-ui/react-radio-group";
import { combineClassNames as v } from "../../utils/combine-class-names.js";
import { SegmentedControlProvider as V } from "./segmented-control-context.js";
import { segmentedControlRoot as h } from "../../galaxy-styles/dist/segmented-control/segmented-control.css.js";
const x = b(
  ({
    children: m,
    className: d,
    size: i = "md",
    display: c = "string",
    value: o,
    onValueChange: e,
    defaultValue: f,
    ...u
  }, p) => {
    const t = I(), C = `${t}-label`, [r, g] = N(f), n = a(() => o ?? r, [o, r]), l = a(
      () => e ?? g,
      [e]
    ), R = v(
      h,
      d
    );
    return /* @__PURE__ */ s(
      V,
      {
        size: i,
        display: c,
        finalValue: n,
        finalOnValueChange: l,
        children: /* @__PURE__ */ s(
          S.Root,
          {
            id: t,
            "aria-labelledby": C,
            ...u,
            className: R,
            ref: p,
            value: n,
            onValueChange: l,
            children: m
          }
        )
      }
    );
  }
);
x.displayName = "SegmentedControl.Root";
export {
  x as SegmentedControlRoot
};
