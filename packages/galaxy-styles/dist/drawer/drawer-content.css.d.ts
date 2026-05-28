import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const drawerOverlay: import("@vanilla-extract/recipes").RuntimeFn<{
    scope: {
        parent: import("@vanilla-extract/css").StyleRule;
        window: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const drawerContent: import("@vanilla-extract/recipes").RuntimeFn<{
    width: {
        full: import("@vanilla-extract/css").StyleRule;
        auto: import("@vanilla-extract/css").StyleRule;
    };
    height: {
        full: import("@vanilla-extract/css").StyleRule;
        auto: import("@vanilla-extract/css").StyleRule;
    };
    scope: {
        parent: import("@vanilla-extract/css").StyleRule;
        window: import("@vanilla-extract/css").StyleRule;
    };
    placement: {
        left: import("@vanilla-extract/css").StyleRule;
        right: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type DrawerContentVariants = NonNullable<RecipeVariants<typeof drawerContent>>;
