import { jsx as o, jsxs as n } from "react/jsx-runtime";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import { Icon as p } from "../icon/icon.js";
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
import "./loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { vars as r } from "../../galaxy-styles/dist/tokens/theme.css.js";
const a = (t) => {
  switch (t) {
    case "primary":
      return {
        stopColors: [r.colors.icon.primary.default],
        gradientColors: ["#03885100", r.colors.icon.primary.default]
      };
    case "neutral":
      return {
        stopColors: [r.colors.icon.neutral.strong],
        gradientColors: ["#1C1C1C00", r.colors.icon.neutral.strong]
      };
    case "critical":
      return {
        stopColors: [r.colors.icon.critical.default],
        gradientColors: ["#C5492E00", r.colors.icon.critical.default]
      };
    case "inverse":
      return {
        stopColors: [r.colors.icon.neutral.inverse],
        gradientColors: ["#FFFFFF00", r.colors.icon.neutral.inverse]
      };
    default:
      throw new Error("Invalid loading spinner status");
  }
}, Z = ({ status: t, size: s, ...l }) => {
  const { stopColors: i, gradientColors: e } = a(t);
  return /* @__PURE__ */ o(p, { size: s, children: /* @__PURE__ */ n(
    "svg",
    {
      width: "80",
      height: "80",
      viewBox: "0 0 80 80",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...l,
      children: [
        /* @__PURE__ */ o("clipPath", { id: "clip", children: /* @__PURE__ */ o(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM40 73.3333C58.4095 73.3333 73.3333 58.4095 73.3333 40C73.3333 21.5905 58.4095 6.66667 40 6.66667C21.5905 6.66667 6.66667 21.5905 6.66667 40C6.66667 58.4095 21.5905 73.3333 40 73.3333Z",
            fill: "url(#gradient)"
          }
        ) }),
        /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ n(
          "radialGradient",
          {
            id: "gradient",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(40 40) scale(40)",
            children: [
              /* @__PURE__ */ o("stop", { stopColor: i[0], stopOpacity: "0" }),
              /* @__PURE__ */ o("stop", { offset: "0.0001", stopColor: i[1], stopOpacity: "0" }),
              /* @__PURE__ */ o("stop", { offset: "1", stopColor: i[2] })
            ]
          }
        ) }),
        /* @__PURE__ */ o("foreignObject", { x: "0", y: "0", width: "80", height: "80", clipPath: "url(#clip)", children: /* @__PURE__ */ o(
          "div",
          {
            style: {
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundImage: `conic-gradient(from 90deg, ${e[0]} 0%, ${e[1]} 100%)`
            }
          }
        ) })
      ]
    }
  ) });
};
export {
  Z as LoadingSpinnerAnimation
};
