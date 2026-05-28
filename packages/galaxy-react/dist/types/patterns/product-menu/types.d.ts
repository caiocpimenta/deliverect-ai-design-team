import { ElementType } from 'react';
import { NavigationItemProps } from '../navigation/navigation-item';
import { NavigationListProps } from '../navigation/navigation-list';
import { NavigationSubitemProps } from '../navigation/navigation-subitem';
import { NavigationSubtitleProps } from '../navigation/navigation-subtitle';
export type CommonProps = {
    /** Determines if an item is active. */
    isActive: boolean;
};
/** Properties to omit for the (sub)items. */
type OmittedProps = "children" | "isActive" | "ref" | "as";
/** Configuration object for a product menu navigation subitem. */
export type ProductMenuSubitemConfig = CommonProps & Omit<NavigationSubitemProps<ElementType<unknown>>, OmittedProps> & {
    as?: ElementType;
    [x: string]: unknown;
};
/**
 * Configuration object for a product menu navigation item.
 * This contains some properties that are common with subitems,
 * as well as properties that are used by the underlying Navigation.Item.
 */
export type ProductMenuItemConfig = CommonProps & Omit<NavigationItemProps<ElementType<unknown>>, OmittedProps> & {
    /** The configuration objects of the subitems. */
    subitems?: ProductMenuSubitemConfig[];
    as?: ElementType;
    [x: string]: unknown;
};
/**
 * Configuration item for a product menu navigation section.
 * The configuration of a section consists of a list of configurations of its items.
 * The order of the items in the list determines the order of the rendered product menu items.
 */
export type ProductMenuSectionConfig = Omit<NavigationListProps, "children" | "ref"> & Partial<Pick<NavigationSubtitleProps, "title" | "trailing">> & {
    /** The configuration objects of the items in this section. */
    items: ProductMenuItemConfig[];
};
/**
 * The configuration of the product menu consists of a list of configurations of its sections.
 * The order of the sections in the list determines the order of the rendered product menu sections.
 */
export type ProductMenuConfig = ProductMenuSectionConfig[];
export {};
