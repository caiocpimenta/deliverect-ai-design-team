import { SidebarButtonVariants } from '@deliverect/galaxy-styles';
import { ButtonProps } from '../../primitives/button';
import { PolymorphicComponentPropWithRef } from '../../types/polymorphic';
export type SidebarItemProps<C extends React.ElementType = "button"> = PolymorphicComponentPropWithRef<C, Omit<ButtonProps<"button">, "variant"> & {
    /** Whether the item represents an action or a product button. */
    variant: SidebarButtonVariants["variant"];
    /**
     * Whether the sidebar item is currently active or not
     */
    active: boolean;
    /**
     * Whether the sell item is available by permission or not (eg. not available items can redirect the user to the discovery page)
     */
    isAvailable?: boolean;
    /**
     * Additional className to style wrapper of the sidebar button
     */
    wrapperClassName?: string;
}>;
type SidebarItemComponent = (<C extends React.ElementType = "button">(props: SidebarItemProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * This component is based on the `Button` component from `@deliverect/galaxy-react`.
 * It renders a Sidebar item with predefined styles according to Figma design.
 * @see https://www.figma.com/file/oqgkUy4dYW4B3BMBHrAwsK/Galaxy-Design-System?node-id=10817%3A8866&mode=dev
 */
export declare const SidebarItem: SidebarItemComponent;
export {};
