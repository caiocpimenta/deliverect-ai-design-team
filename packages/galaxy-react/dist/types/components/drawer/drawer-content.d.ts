import { DrawerContentVariants } from '@deliverect/galaxy-styles';
import * as DrawerUI from "@radix-ui/react-dialog";
type DrawerContentOwnProps = {
    overlay?: boolean;
    overlayClassName?: string;
    dismissOnOutsideClick?: boolean;
    onPointerDownOutside?: (event: PointerEvent) => void;
};
export type DrawerContentProps = DrawerUI.DialogContentProps & DrawerContentVariants & DrawerContentOwnProps;
/**
 * Container for the actual content to be shown on the drawer (header, body, footer),
 * and also abstraction over the `portal` (that "teleports" the drawer to the body) and
 * over the `overlay` (which darkens the inert part of the screen), if applicable.
 * This implementation uses `Dialog.Portal`, `Dialog.Overlay` and `Dialog.Content` from `@radix-ui/react-dialog`.
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#portal
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#overlay
 * @see https://www.radix-ui.com/primitives/docs/components/dialog#content
 */
export declare const DrawerContent: import('react').ForwardRefExoticComponent<DrawerUI.DialogContentProps & {
    width?: "auto" | "full" | undefined;
    height?: "auto" | "full" | undefined;
    scope?: "parent" | "window" | undefined;
    placement?: "right" | "left" | undefined;
} & DrawerContentOwnProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
