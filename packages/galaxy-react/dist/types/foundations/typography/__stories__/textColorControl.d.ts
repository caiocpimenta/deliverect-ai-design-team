/**
 * Common configuration for the text color control in Storybook
 */
export declare const textColorControl: {
    readonly type: "string";
    readonly control: {
        readonly type: "select";
    };
    readonly options: readonly ["default", "secondary", "placeholder", "inactive", "inverse", "inherit", "neutral", "brand", "success", "critical", "info", "warning", "magic", "decorative"];
};
