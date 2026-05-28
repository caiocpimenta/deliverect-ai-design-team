import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & {
    className?: string;
};
/**
 * Component that renders a list of CommandItems.
 * To be used in a Command component.
 */
export declare const CommandList: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
