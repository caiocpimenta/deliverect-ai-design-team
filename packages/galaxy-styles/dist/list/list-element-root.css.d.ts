import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const listElementRoot: import("@vanilla-extract/recipes").RuntimeFn<{
    type: {
        default: {};
        divider: {
            borderBottomWidth: `var(--${string})`;
        };
        card: {
            borderWidth: `var(--${string})`;
            borderRadius: `var(--${string})`;
        };
    };
    size: {
        default: {
            padding: `var(--${string})`;
        };
        compact: {
            padding: `var(--${string}) var(--${string})`;
        };
    };
}>;
export declare const listElementPrefix: string;
export declare const listElementTitle: string;
export declare const listElementSuffix: string;
export declare const listElementDescription: string;
export type ListElementRootVariants = RecipeVariants<typeof listElementRoot>;
