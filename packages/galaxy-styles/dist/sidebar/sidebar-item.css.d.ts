import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const sidebarItem: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        product: {};
        action: import("@vanilla-extract/css").StyleRule;
    };
    status: {
        default: {};
        inactive: import("@vanilla-extract/css").StyleRule;
        active: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type SidebarButtonVariants = NonNullable<RecipeVariants<typeof sidebarItem>>;
