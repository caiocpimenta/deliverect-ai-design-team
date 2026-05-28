import { ReactNode } from 'react';
import { BadgeProps } from '../../components/badge';
export type DataCardChangeIndicatorProps = {
    relativeChange: number;
    children?: ReactNode;
    reverse?: boolean;
} & Omit<BadgeProps<"span">, "status" | "Icon" | "children">;
export declare const DataCardChangeIndicator: import('react').ForwardRefExoticComponent<Omit<DataCardChangeIndicatorProps, "ref"> & import('react').RefAttributes<HTMLSpanElement>>;
