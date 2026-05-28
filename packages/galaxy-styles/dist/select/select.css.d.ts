import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const selectTrigger: string;
export declare const selectContent: string;
export declare const selectButton: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        default: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
    };
    variant: {
        default: import("@vanilla-extract/css").StyleRule;
        ghost: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type SelectButtonVariants = NonNullable<RecipeVariants<typeof selectButton>>;
export declare const selectLabel: string;
