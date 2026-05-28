import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const radioGroupWrapper: string;
export declare const radioGroupRoot: import("@vanilla-extract/recipes").RuntimeFn<{
    orientation: {
        horizontal: import("@vanilla-extract/css").StyleRule;
        vertical: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type RadioGroupRootVariants = RecipeVariants<typeof radioGroupRoot>;
