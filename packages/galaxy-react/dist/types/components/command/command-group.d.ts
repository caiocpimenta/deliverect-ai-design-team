import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & {
    className?: string;
};
/**
 * Component that provides a grouping to a list of CommandItems.
 */
export declare const CommandGroup: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
