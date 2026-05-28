import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const inputRoot: import("@vanilla-extract/recipes").RuntimeFn<{
    width: {
        auto: import("@vanilla-extract/css").StyleRule;
        full: import("@vanilla-extract/css").StyleRule;
        fitContent: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type InputRootVariants = NonNullable<RecipeVariants<typeof inputRoot>>;
