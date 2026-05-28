import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const heading: import("@vanilla-extract/recipes").RuntimeFn<{
    level: {
        1: import("@vanilla-extract/css").StyleRule;
        2: import("@vanilla-extract/css").StyleRule;
        3: import("@vanilla-extract/css").StyleRule;
        4: import("@vanilla-extract/css").StyleRule;
        5: import("@vanilla-extract/css").StyleRule;
        6: import("@vanilla-extract/css").StyleRule;
    };
    overflow: {
        false: import("@vanilla-extract/css").StyleRule;
    };
    color: Record<"default" | "inverse" | "inactive" | "inherit" | "text" | "success" | "brand" | "critical" | "info" | "warning" | "decorative" | "magic" | "neutral" | "primary" | "secondary" | "placeholder", string>;
}>;
export type HeadingVariants = RecipeVariants<typeof heading>;
