import { StyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export type DropdownMenuItemStatus = "critical" | "neutral";
export declare const dropdownMenuItemBasePaddingStyles: {
    readonly padding: `var(--${string}) var(--${string})`;
};
export declare const dropdownMenuItemBase: string;
export declare const dropdownMenuItem: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        critical: StyleRule;
        neutral: StyleRule;
    };
    justifyContent: {
        start: StyleRule;
        between: StyleRule;
    };
}>;
export type DropdownMenuItemVariant = NonNullable<RecipeVariants<typeof dropdownMenuItem>>;
