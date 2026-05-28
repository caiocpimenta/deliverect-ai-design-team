import { Command as CommandPrimitive } from 'cmdk';
import * as React from "react";
export type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    className?: string;
};
/**
 * Component that provides a search input field in a Command component.
 */
export declare const CommandInput: React.ForwardRefExoticComponent<Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type" | "value"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React.RefAttributes<HTMLInputElement>, "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
