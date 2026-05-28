import { StyleRule } from "@vanilla-extract/css";
import { OldStatus, Size } from "./types";
type PlainButtonSizeVariant = {
    variants: {
        variant: "plain";
        size: Size;
    };
    style: StyleRule;
};
export declare function plainButtonSize(size: Size): PlainButtonSizeVariant;
type PlainButtonStatusVariant = {
    variants: {
        variant: "plain";
        status: OldStatus;
    };
    style: StyleRule;
};
export declare function plainButtonStatus(status: OldStatus): PlainButtonStatusVariant;
export {};
