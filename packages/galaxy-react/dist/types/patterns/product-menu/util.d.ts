import { ProductMenuSubitemConfig } from './types';
/**
 * Util function to determine if the navigation item is open.
 *
 * @param config the configuration object of the product menu item.
 * @returns boolean that indicates if the item is open
 */
export declare const getIsOpen: (isActive: boolean, subitems: ProductMenuSubitemConfig[] | undefined) => boolean;
