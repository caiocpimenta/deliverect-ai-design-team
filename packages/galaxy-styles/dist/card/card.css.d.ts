import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const card: import("@vanilla-extract/recipes").RuntimeFn<{
    /**
     * The border of the card
     */
    border: {
        none: import("@vanilla-extract/css").StyleRule;
        neutral: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
    };
    /**
     * The height of the card
     */
    height: {
        full: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type CardVariants = NonNullable<RecipeVariants<typeof card>>;
