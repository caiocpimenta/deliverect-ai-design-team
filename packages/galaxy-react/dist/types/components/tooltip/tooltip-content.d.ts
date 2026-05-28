import { TooltipVariants } from '@deliverect/galaxy-styles';
import * as TooltipUI from "@radix-ui/react-tooltip";
export type TooltipContentProps = TooltipVariants & TooltipUI.TooltipContentProps;
export declare const TooltipContent: {
    ({ children, className, size, ...props }: TooltipContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
