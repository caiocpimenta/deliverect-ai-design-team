import { default as React } from 'react';
import { BadgeProps } from '../badge';
import * as TooltipUI from "@radix-ui/react-tooltip";
export type TooltipBadgeTriggerProps<C extends React.ElementType> = Omit<TooltipUI.TooltipTriggerProps, "asChild"> & BadgeProps<C>;
export declare const TooltipBadgeTrigger: React.ForwardRefExoticComponent<Omit<TooltipBadgeTriggerProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
