import { jsx as t } from "react/jsx-runtime";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as o } from "../../primitives/button/button.js";
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
import { ChevronDirectionRight as i } from "../../foundations/icons/chevron-direction-right.js";
const m = ({
  // We do not want the `react-day-picker` children that are included by default.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children: p,
  ...r
}) => /* @__PURE__ */ t(
  o,
  {
    ...r,
    variant: "transparent",
    Icon: /* @__PURE__ */ t(i, { size: "lg" })
  }
);
m.displayName = "Calendar.DefaultNextButton";
export {
  m as CalendarDefaultNextButton
};
