import { RecipeVariants } from "@vanilla-extract/recipes";
/** Styling for the container of the title input. */
export declare const titleInputContainer: string;
/**
 * Styling for the hidden content of the title input.
 * This allows us to resize the input based on the content.
 */
export declare const titleInputHiddenContent: string;
export declare const titleInput: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        default: {};
        critical: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TitleInputVariants = NonNullable<RecipeVariants<typeof titleInput>>;
