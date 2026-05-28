import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    className?: string;
};
/**
 * Component that shows one option in a dropdown list.
 * To be used in a CommandList.
 */
export declare const CommandItem: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    forceMount?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
