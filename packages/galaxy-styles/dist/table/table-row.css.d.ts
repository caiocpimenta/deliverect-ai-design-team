import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const tableRow: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        default: import("@vanilla-extract/css").StyleRule;
        primary: string;
        active: string;
        success: string;
        critical: import("@vanilla-extract/css").StyleRule;
    };
    sticky: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TableRowVariants = NonNullable<RecipeVariants<typeof tableRow>>;
