"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
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
import { ImageOutline as u } from "../../foundations/icons/image-outline.js";
import { Box as f } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as t } from "../../utils/combine-class-names.js";
import { thumbnail as h, thumbnailImage as b } from "../../galaxy-styles/dist/thumbnail/thumbnail.css.js";
const g = (m) => m === "lg" ? "xl" : m, d = c(
  ({ size: m, src: o, className: i, imgClassName: p, alt: a, ...e }, l) => {
    const n = t(h({ size: m }), i), s = t(b, p);
    return /* @__PURE__ */ r(
      f,
      {
        ...o ? {} : { role: "img" },
        ...e,
        className: n,
        ref: l,
        children: o ? /* @__PURE__ */ r("img", { className: s, src: o, alt: a }) : /* @__PURE__ */ r(
          u,
          {
            color: "neutral",
            size: g(m),
            "data-testid": "thumbnail-placeholder"
          }
        )
      }
    );
  }
);
d.displayName = "Thumbnail";
export {
  d as Thumbnail
};
