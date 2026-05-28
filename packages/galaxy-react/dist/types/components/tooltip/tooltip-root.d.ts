import { ReactElement } from 'react';
import * as TooltipUI from "@radix-ui/react-tooltip";
export type TooltipRootProps = TooltipUI.TooltipProps & Pick<TooltipUI.TooltipProviderProps, "skipDelayDuration" | "delayDuration" | "disableHoverableContent">;
export declare const TooltipRoot: {
    ({ children, skipDelayDuration, delayDuration, disableHoverableContent, ...props }: TooltipRootProps): ReactElement;
    displayName: string;
};
