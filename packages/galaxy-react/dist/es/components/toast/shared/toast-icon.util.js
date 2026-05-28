import "react/jsx-runtime";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import "../../../primitives/button/button.js";
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
import { CheckCircleFill as t } from "../../../foundations/icons/check-circle-fill.js";
import { ErrorFill as m } from "../../../foundations/icons/error-fill.js";
import { InfoFill as o } from "../../../foundations/icons/info-fill.js";
import { WarningFill as p } from "../../../foundations/icons/warning-fill.js";
import "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
const i = {
  neutral: o,
  warning: p,
  success: t,
  critical: m,
  info: o
}, D = (r) => r === void 0 ? i.neutral : i[r];
export {
  D as getToastIconForStatus
};
