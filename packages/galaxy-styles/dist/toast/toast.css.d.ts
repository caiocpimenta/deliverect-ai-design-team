import { StyleRule } from "@vanilla-extract/css";
export declare const TOAST_ANIMATION_SPEED: `var(--${string})`;
export declare const TOAST_ANIMATION_TYPE: `var(--${string})`;
export declare const toastClose: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        warning: StyleRule;
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
    };
}>;
export declare const toastIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        warning: StyleRule;
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
    };
}>;
export declare const toastDescription: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        warning: StyleRule;
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
    };
}>;
export declare const toastAction: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        warning: StyleRule;
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
    };
}>;
export declare const toastStatusVariants: {
    neutral: StyleRule;
    warning: StyleRule;
    success: StyleRule;
    critical: StyleRule;
    info: StyleRule;
};
export declare const toastDefaultStatusVariant = "neutral";
export type ToastStatusVariants = keyof typeof toastStatusVariants | undefined;
