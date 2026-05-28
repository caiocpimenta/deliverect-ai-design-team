/**
 * Common subset of default variants of the chips and chip icons.
 */
export declare const chipDefaultVariants: {
    readonly size: "md";
    readonly disabled: false;
};
/**
 * Common styles shared across the various chips
 */
export declare const chip: {
    readonly borderRadius: `var(--${string})`;
    readonly display: "inline-flex";
    readonly alignItems: "center";
    readonly gap: `var(--${string})`;
    readonly color: `var(--${string})`;
    readonly fontWeight: `var(--${string})`;
};
/**
 * Values for the "size" variants shared across the various chips.
 */
export declare const chipSizeVariants: {
    readonly sm: import("@vanilla-extract/css").StyleRule;
    readonly md: import("@vanilla-extract/css").StyleRule;
    readonly lg: import("@vanilla-extract/css").StyleRule;
};
/**
 * Values for the "icon" variants shared across the various chips.
 */
export declare const chipIconVariants: {
    readonly true: {};
    readonly false: {};
};
/**
 * Common styles shared across the chips when they're "disabled".
 */
export declare const chipCommonDisabledStyles: {
    readonly color: `var(--${string})`;
    readonly backgroundColor: `var(--${string})`;
    readonly outline: "none";
};
/**
 * Common styles shared across the chips when they're "hovered".
 */
export declare const chipCommonHoverStyles: {
    readonly color: `var(--${string})`;
    readonly backgroundColor: `var(--${string})`;
    readonly border: `var(--${string}) solid var(--${string})`;
};
/**
 * Common styles shared across the chips when they're "active".
 */
export declare const chipCommonActiveStyles: {
    readonly color: `var(--${string})`;
    readonly backgroundColor: `var(--${string})`;
    readonly border: `var(--${string}) solid var(--${string})`;
};
/**
 * Common styles shared across the icons of the various chips.
 */
export declare const commonChipIconStyles: {
    readonly color: `var(--${string})`;
    readonly fontSize: `var(--${string})`;
    readonly display: "inline-flex";
    readonly alignItems: "center";
};
/**
 * Values for the "icon size" variants shared across the various chips.
 */
export declare const chipIconSizeVariants: {
    readonly sm: import("@vanilla-extract/css").StyleRule;
    readonly md: import("@vanilla-extract/css").StyleRule;
    readonly lg: import("@vanilla-extract/css").StyleRule;
};
/**
 * Values for the "icon on an enabled/disabled chip" variants shared across the various chips.
 */
export declare const chipIconDisabledVariants: {
    readonly true: import("@vanilla-extract/css").StyleRule;
    readonly false: import("@vanilla-extract/css").StyleRule;
};
/**
 * Styles for left-hand side icons of the chips (if applicable).
 */
export declare const chipIcon: import("@vanilla-extract/recipes").RuntimeFn<{
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
