import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const button: import("@vanilla-extract/recipes").RuntimeFn<{
    /**
     * Status of the button, affects the color palette that's used.
     */
    status: {
        primary: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
        warning: import("@vanilla-extract/css").StyleRule;
        info: import("@vanilla-extract/css").StyleRule;
        neutral: import("@vanilla-extract/css").StyleRule;
    };
    /**
     * Variant of button, affects border, background and text colors.
     */
    variant: {
        filled: {};
        outline: import("@vanilla-extract/css").StyleRule;
        ghost: import("@vanilla-extract/css").StyleRule;
        transparent: import("@vanilla-extract/css").StyleRule;
        subtle: {};
        plain: import("@vanilla-extract/css").StyleRule;
    };
    /**
     * Size of the button.
     */
    size: {
        xs: import("@vanilla-extract/css").StyleRule;
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
        lg: import("@vanilla-extract/css").StyleRule;
    };
    icon: {
        left: {};
        right: {};
        both: {};
        single: {};
    };
}>;
export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
/**
 * Css specific for icons used in the button, typically a left or right icon.
 */
export declare const buttonIcon: string;
