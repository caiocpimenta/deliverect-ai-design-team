import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & {
    className?: string;
};
/**
 * Component used to show a message when nothing is found.
 * To be used in combination with CommandList.
 */
export declare const CommandEmpty: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
