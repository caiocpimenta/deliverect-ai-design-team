import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { borderRadius, borderWidth } from "./border";
import { breakpoints } from "./breakpoints";
import { flex, flexBasis, flexSpace } from "./flex";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { sprinklesLayer } from "../layers.css";
const commonPropertiesConfig = Object.freeze({
    conditions: {
        mobile: {},
        tabletPortrait: {
            "@media": `screen and (min-width: ${breakpoints.tabletPortrait}px)`,
        },
        tabletLandscape: {
            "@media": `screen and (min-width: ${breakpoints.tabletLandscape}px)`,
        },
        desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
    },
    defaultCondition: "mobile",
    responsiveArray: ["mobile", "tabletPortrait", "tabletLandscape", "desktop"],
    "@layer": sprinklesLayer,
});
const flexProperties = defineProperties({
    ...commonPropertiesConfig,
    properties: {
        flex: flex,
        flexBasis: flexBasis,
        flexGrow: flexSpace,
        flexShrink: flexSpace,
    },
    shorthands: {
        f: ["flex"],
        fb: ["flexBasis"],
        fg: ["flexGrow"],
        fs: ["flexShrink"],
    },
});
const spacingProperties = defineProperties({
    ...commonPropertiesConfig,
    properties: {
        paddingTop: spacing,
        paddingRight: spacing,
        paddingBottom: spacing,
        paddingLeft: spacing,
        margin: spacing,
        marginTop: spacing,
        marginRight: spacing,
        marginBottom: spacing,
        marginLeft: spacing,
    },
    shorthands: {
        padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        pt: ["paddingTop"],
        pr: ["paddingRight"],
        pb: ["paddingBottom"],
        pl: ["paddingLeft"],
        paddingX: ["paddingLeft", "paddingRight"],
        px: ["paddingLeft", "paddingRight"],
        paddingY: ["paddingTop", "paddingBottom"],
        py: ["paddingTop", "paddingBottom"],
        margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
        m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
        mt: ["marginTop"],
        mr: ["marginRight"],
        mb: ["marginBottom"],
        ml: ["marginLeft"],
        marginX: ["marginLeft", "marginRight"],
        mx: ["marginLeft", "marginRight"],
        marginY: ["marginTop", "marginBottom"],
        my: ["marginTop", "marginBottom"],
    },
});
const borderProperties = defineProperties({
    ...commonPropertiesConfig,
    properties: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderTopWidth: borderWidth,
        borderRightWidth: borderWidth,
        borderBottomWidth: borderWidth,
        borderLeftWidth: borderWidth,
    },
    shorthands: {
        borderRadius: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomRightRadius",
            "borderBottomLeftRadius",
        ],
        borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
        borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
        borderLeftRadius: ["borderTopLeftRadius", "borderBottomLeftRadius"],
        borderRightRadius: ["borderTopRightRadius", "borderBottomRightRadius"],
        borderWidth: [
            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",
        ],
    },
});
const shadowProperties = defineProperties({
    ...commonPropertiesConfig,
    properties: {
        boxShadow: shadows,
    },
});
export const sprinkles = createSprinkles(flexProperties, spacingProperties, borderProperties, shadowProperties);
