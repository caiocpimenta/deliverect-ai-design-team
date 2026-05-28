import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const tooltip: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TooltipVariants = RecipeVariants<typeof tooltip>;
