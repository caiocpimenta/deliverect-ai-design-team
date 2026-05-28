import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const MESSAGE_TOAST_VIEWPORT_PADDING: `var(--${string})`;
export declare const messageToastBody: string;
export declare const messageToastTitle: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: import("@vanilla-extract/css").StyleRule;
        success: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
        info: import("@vanilla-extract/css").StyleRule;
        warning: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const messageToast: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: import("@vanilla-extract/css").StyleRule;
        warning: import("@vanilla-extract/css").StyleRule;
        success: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
        info: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const messageToastViewport: string;
export type MessageToastVariants = NonNullable<RecipeVariants<typeof messageToast>>;
