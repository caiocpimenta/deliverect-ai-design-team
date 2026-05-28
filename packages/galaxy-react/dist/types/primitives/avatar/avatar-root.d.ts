import { AvatarVariants } from '@deliverect/galaxy-styles';
import * as AvatarUI from "@radix-ui/react-avatar";
export type AvatarRootProps = AvatarVariants & AvatarUI.AvatarProps & {
    /** Whether to show a border around avatar or not */
    hasBorder?: boolean;
};
/**
 * The container for all the parts of a avatar (image and fallback).
 * This implementation uses `Avatar.Root` from `@radix-ui/react-avatar`.
 * @see https://www.radix-ui.com/primitives/docs/components/avatar#root
 */
export declare const AvatarRoot: import('react').ForwardRefExoticComponent<{
    variant?: "circle" | "square" | undefined;
    size?: "xl" | "lg" | "md" | "sm" | undefined;
    border?: "around" | "none" | undefined;
} & AvatarUI.AvatarProps & {
    /** Whether to show a border around avatar or not */
    hasBorder?: boolean;
} & import('react').RefAttributes<HTMLSpanElement>>;
