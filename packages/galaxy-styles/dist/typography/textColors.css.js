import { styleVariants } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsTypography } from "../layers.css";
/**
 * Common style variant for text colors
 */
export const textColors = styleVariants({
    default: dsTypography({ color: vars.colors.text.neutral.static.primary }),
    // TODO Replace old primary (= green) with new primary (= neutral) once the `Text` instances are migrated
    // primary: dsTypography({ color: vars.colors.text.neutral.static.primary }),
    secondary: dsTypography({ color: vars.colors.text.neutral.static.secondary }),
    inverse: dsTypography({ color: vars.colors.text.neutral.static.inverse }),
    placeholder: dsTypography({ color: vars.colors.text.neutral.static.placeholder }),
    inactive: dsTypography({ color: vars.colors.text.neutral.static.inactive }),
    // Special colors
    neutral: dsTypography({ color: vars.colors.text.neutral.static.primary }),
    brand: dsTypography({ color: vars.colors.text.brand.static }),
    success: dsTypography({ color: vars.colors.text.success.static }),
    critical: dsTypography({ color: vars.colors.text.critical.static }),
    warning: dsTypography({ color: vars.colors.text.warning.static }),
    info: dsTypography({ color: vars.colors.text.info.static }),
    magic: dsTypography({ color: vars.colors.text.magic.static }),
    decorative: dsTypography({ color: vars.colors.text.decorative.static }),
    // Inherit from parent
    inherit: dsTypography({ color: "inherit" }),
    /** @deprecated use `brand` or `success` */
    primary: dsTypography({ color: vars.colors.text.primary.default }),
    /** @deprecated use `neutral` or `default` */
    text: dsTypography({ color: vars.colors.text.neutral.static.primary }),
});
