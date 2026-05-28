import { InlineProps } from '../../foundations';
type ModalHeaderOwnProps = {
    showCloseButton?: boolean;
};
export type ModalHeaderProps = InlineProps & ModalHeaderOwnProps;
/**
 * Container for a standard modal's header.
 * This implementation uses the `Dialog.Close` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#close
 */
export declare const ModalHeader: import('react').ForwardRefExoticComponent<{
    children: import('react').ReactNode;
    className?: string;
} & Omit<import('../../foundations').BoxProps, "wrap"> & {
    width?: "auto" | "full" | undefined;
    space?: "xl" | "lg" | "md" | "sm" | "none" | "xs" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200" | "gutter" | undefined;
    alignX?: "center" | "right" | "left" | "spaceBetween" | undefined;
    alignY?: "center" | "top" | "bottom" | "stretch" | undefined;
    wrap?: boolean | undefined;
} & ModalHeaderOwnProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
