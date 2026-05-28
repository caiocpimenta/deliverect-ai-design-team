import { StyleRule } from "@vanilla-extract/css";
/** TODO [DLV-1437] */
export type OldStatus = "primary" | "critical" | "warning" | "info" | "neutral";
export type Status = "default" | "critical";
export type Icon = "left" | "right" | "both" | "single";
/**
 * TODO [DLV-1437] Replace with the following:
 * export type Level = "primary" | "secondary" | "tertiary";
 */
export type Variant = "filled" | "outline" | "ghost" | "transparent" | "subtle";
/**
 * Size of the buttons
 */
export type Size = "xs" | "sm" | "md" | "lg";
export type ButtonTypeVariant<T extends Variant> = {
    variants: {
        status: OldStatus;
        variant: T;
    };
    style: StyleRule;
};
export type ButtonTypeIconVariant = {
    variants: {
        icon: Icon;
        size: Size;
    };
    style: StyleRule;
};
