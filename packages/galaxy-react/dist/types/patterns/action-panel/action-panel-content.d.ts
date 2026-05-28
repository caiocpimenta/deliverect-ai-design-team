import { InlineProps } from '../../index.ts';
export type ActionPanelContentProps = InlineProps;
/**
 * Container for the actual content to be shown in the action panel.
 * This implementation uses `Inline` from `@deliverect/galaxy-react`
 * and should be used as a direct child of `ActionPanel.Root`.
 */
export declare const ActionPanelContent: import('react').ForwardRefExoticComponent<{
    children: import('react').ReactNode;
    className?: string;
} & Omit<import('../../index.ts').BoxProps, "wrap"> & {
    width?: "auto" | "full" | undefined;
    space?: "xl" | "lg" | "md" | "sm" | "none" | "xs" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200" | "gutter" | undefined;
    alignX?: "center" | "right" | "left" | "spaceBetween" | undefined;
    alignY?: "center" | "top" | "bottom" | "stretch" | undefined;
    wrap?: boolean | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
