export type Environment = "production" | "staging" | "testing" | "development" | "local";
type EnvironmentConfig = {
    /** Display label for the badge. */
    label: string;
    /** Color of the badge. */
    badgeStatus: "warning" | "info" | "success" | undefined;
};
export declare const ENVIRONMENT_CONFIGS: Record<Environment, EnvironmentConfig>;
export {};
