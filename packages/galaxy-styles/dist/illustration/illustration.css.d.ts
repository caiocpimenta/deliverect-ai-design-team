import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const illustration: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
        lg: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type IllustrationVariants = NonNullable<RecipeVariants<typeof illustration>>;
