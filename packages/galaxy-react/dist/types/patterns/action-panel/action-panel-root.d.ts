import * as ToastUI from "@radix-ui/react-toast";
export type ActionPanelRootProps = ToastUI.ToastProps;
/**
 * Container for all the parts of an action panel.
 * This implementation uses `Toast.Provider`, `Toast.Root` and `Toast.Viewport`
 * from `@radix-ui/react-toast`.
 */
export declare const ActionPanelRoot: import('react').ForwardRefExoticComponent<ToastUI.ToastProps & import('react').RefAttributes<HTMLLIElement>>;
