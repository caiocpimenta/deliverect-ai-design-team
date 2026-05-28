import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const bannerActions: string;
export declare const banner: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: import("@vanilla-extract/css").StyleRule;
        success: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
        info: import("@vanilla-extract/css").StyleRule;
        warning: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type BannerVariants = NonNullable<RecipeVariants<typeof banner>>;
