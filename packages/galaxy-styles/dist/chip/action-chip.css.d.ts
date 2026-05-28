import { RecipeVariants } from "@vanilla-extract/recipes";
/**
 * Styles for the left-hand side icon of the action chip.
 */
export declare const actionChipIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
    };
    disabled: {
        readonly true: import("@vanilla-extract/css").StyleRule;
        readonly false: import("@vanilla-extract/css").StyleRule;
    };
}>;
/**
 * Styles for the actual action chip.
 */
export declare const actionChip: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
    };
    leadingIcon: {
        readonly true: {};
        readonly false: {};
    };
    trailingIcon: {
        readonly true: {};
        readonly false: {};
    };
    disabled: {
        false: import("@vanilla-extract/css").StyleRule;
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type ActionChipVariants = NonNullable<RecipeVariants<typeof actionChip>>;
