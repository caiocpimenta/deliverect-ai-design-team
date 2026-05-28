import { RecipeVariants } from "@vanilla-extract/recipes";
/** Styles for the Text component */
export declare const text: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        md: import("@vanilla-extract/css").StyleRule;
        sm: import("@vanilla-extract/css").StyleRule;
        xs: import("@vanilla-extract/css").StyleRule;
    };
    weight: {
        regular: import("@vanilla-extract/css").StyleRule;
        medium: import("@vanilla-extract/css").StyleRule;
        bold: import("@vanilla-extract/css").StyleRule;
    };
    color: Record<"default" | "inverse" | "inactive" | "inherit" | "text" | "success" | "brand" | "critical" | "info" | "warning" | "decorative" | "magic" | "neutral" | "primary" | "secondary" | "placeholder", string>;
    overflow: {
        false: import("@vanilla-extract/css").StyleRule;
    };
    breakOnSpaces: {
        true: import("@vanilla-extract/css").StyleRule;
    };
    align: {
        left: import("@vanilla-extract/css").StyleRule;
        center: import("@vanilla-extract/css").StyleRule;
        right: import("@vanilla-extract/css").StyleRule;
    };
    width: {
        full: import("@vanilla-extract/css").StyleRule;
        auto: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TextVariants = RecipeVariants<typeof text>;
