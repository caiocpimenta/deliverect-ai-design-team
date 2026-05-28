import { decorative as r, magic as n, info as o, warning as a, critical as s, success as u, neutral as g } from "./foundation.js";
const m = {
  neutral: c(g),
  success: c(u),
  critical: c(s),
  warning: c(a),
  info: c(o),
  magic: c(n),
  decorative: c(r)
};
function c(i) {
  return {
    10: i[50],
    100: i[200],
    200: i[400],
    300: i[600],
    400: i[700],
    500: i[900]
  };
}
export {
  m as data
};
