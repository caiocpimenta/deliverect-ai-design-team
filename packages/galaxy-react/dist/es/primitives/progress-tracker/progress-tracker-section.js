import { jsx as o } from "react/jsx-runtime";
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
import "./progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as t } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { progressTrackerIndicator as m, progressTrackerSection as p } from "../../galaxy-styles/dist/progress-tracker/progress-tracker-section.css.js";
const e = ({
  status: r
}) => {
  const i = m({ status: r });
  return /* @__PURE__ */ o(
    t,
    {
      "data-testid": "section",
      "data-status": r,
      className: p,
      children: /* @__PURE__ */ o(
        t,
        {
          "data-testid": "indicator",
          className: i,
          "aria-current": r === "in-progress" ? "step" : void 0
        }
      )
    }
  );
};
e.displayName = "ProgressTrackerSection";
export {
  e as ProgressTrackerSection
};
