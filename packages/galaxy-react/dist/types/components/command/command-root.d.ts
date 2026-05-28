import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    className?: string;
};
/**
 * Root component that can be used to show a list of options (CommandList)
 * and optionally an input search field up top (CommandInput).
 *
 * Renders it with a border, shadow and rounded radius.
 */
export declare const Command: React.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    vimBindings?: boolean;
} & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLDivElement>>;
