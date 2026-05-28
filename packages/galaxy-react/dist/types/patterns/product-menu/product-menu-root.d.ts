import { ComponentProps, ReactNode } from 'react';
import { Navigation } from '../navigation';
import { ProductMenuConfig } from './types';
export type ProductMenuRootProps = Omit<ComponentProps<typeof Navigation.Root>, "children"> & {
    /** The title of the product. */
    title: string;
    /** The configuration for the product menu. */
    config: ProductMenuConfig;
    /** Indicates if the product menu is currently in a loading state. */
    isLoading?: boolean;
    /** Custom children to add before the product menu items defined by the config. */
    leading?: ReactNode;
    /** Custom children to add after the product menu items defined by the config. */
    trailing?: ReactNode;
};
export declare const ProductMenuRoot: import('react').ForwardRefExoticComponent<Omit<ProductMenuRootProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
