import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { TableRowVariants } from '@deliverect/galaxy-styles';
type TableRowOwnProps = {
    children?: ReactNode;
};
export type TableRowProps = Omit<ComponentPropsWithoutRef<"tr">, keyof TableRowOwnProps> & TableRowVariants & TableRowOwnProps;
/**
 * This component displays a row in a table.
 * It contains one or more `Table.Cell` components.
 */
export declare const TableRow: import('react').ForwardRefExoticComponent<Omit<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref">, "children"> & {
    status?: "default" | "primary" | "critical" | "success" | "active" | undefined;
    sticky?: boolean | undefined;
} & TableRowOwnProps & import('react').RefAttributes<HTMLTableRowElement>>;
export {};
