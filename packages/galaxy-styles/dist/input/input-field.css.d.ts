import { RecipeVariants } from "@vanilla-extract/recipes";
/**
 * Styles for the input group.
 * This wraps an input field together with its prefix and suffix elements.
 */
export declare const inputGroup: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        readonly default: {};
        readonly critical: import("@vanilla-extract/css").StyleRule;
    };
    variant: {
        default: {};
        ghost: import("@vanilla-extract/css").StyleRule[];
    };
    resize: {
        readonly none: import("@vanilla-extract/css").StyleRule;
        readonly vertical: import("@vanilla-extract/css").StyleRule;
        readonly horizontal: import("@vanilla-extract/css").StyleRule;
        readonly both: import("@vanilla-extract/css").StyleRule;
    };
    readOnly: {
        true: import("@vanilla-extract/css").StyleRule;
    };
    disabled: {
        true: import("@vanilla-extract/css").StyleRule[];
    };
}>;
export type InputGroupVariants = NonNullable<RecipeVariants<typeof inputGroup>>;
/**
 * Styles for the input field.
 */
export declare const inputField: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        readonly default: {};
        readonly critical: import("@vanilla-extract/css").StyleRule;
    };
    variant: {
        default: {};
        ghost: import("@vanilla-extract/css").StyleRule[];
    };
    resize: {
        readonly none: import("@vanilla-extract/css").StyleRule;
        readonly vertical: import("@vanilla-extract/css").StyleRule;
        readonly horizontal: import("@vanilla-extract/css").StyleRule;
        readonly both: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type InputFieldVariants = NonNullable<RecipeVariants<typeof inputField>>;
