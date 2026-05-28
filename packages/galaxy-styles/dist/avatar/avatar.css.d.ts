import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const avatar: import("@vanilla-extract/recipes").RuntimeFn<{
    /**
     * Variant of the avatar, affects border-radius.
     */
    variant: {
        circle: import("@vanilla-extract/css").StyleRule;
        square: import("@vanilla-extract/css").StyleRule;
    };
    /**
     * Size of the avatar.
     */
    size: {
        readonly xl: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly sm: import("@vanilla-extract/css").StyleRule;
    };
    /**
     * Variant of the avatar's border.
     */
    border: {
        around: import("@vanilla-extract/css").StyleRule;
        none: {};
    };
}>;
export declare const avatarFallback: string;
export declare const avatarImage: string;
export type AvatarVariants = NonNullable<RecipeVariants<typeof avatar>>;
