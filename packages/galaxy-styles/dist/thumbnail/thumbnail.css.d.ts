import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const thumbnail: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
        readonly xl: import("@vanilla-extract/css").StyleRule;
    };
}>;
/** Style to pass to the image within the thumbnail. */
export declare const thumbnailImage: string;
export type ThumbnailVariants = NonNullable<RecipeVariants<typeof thumbnail>>;
