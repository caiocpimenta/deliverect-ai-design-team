import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const link: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        xs: import("@vanilla-extract/css").StyleRule;
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type LinkVariants = NonNullable<RecipeVariants<typeof link>>;
