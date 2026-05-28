import { ReactNode } from 'react';
import { InlineVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../..';
export type InlineProps = {
    children: ReactNode;
    className?: string;
} & Omit<BoxProps, "wrap"> & InlineVariants;
/**
 * Layout component that helps organizing components horizontally.
 */
export declare const Inline: import('react').ForwardRefExoticComponent<{
    children: ReactNode;
    className?: string;
} & Omit<BoxProps, "wrap"> & {
    width?: "auto" | "full" | undefined;
    space?: "xl" | "lg" | "md" | "sm" | "none" | "xs" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200" | "gutter" | undefined;
    alignX?: "center" | "right" | "left" | "spaceBetween" | undefined;
    alignY?: "center" | "top" | "bottom" | "stretch" | undefined;
    wrap?: boolean | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
