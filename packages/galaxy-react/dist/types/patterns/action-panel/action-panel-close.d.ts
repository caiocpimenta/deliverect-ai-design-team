import { ButtonProps } from '../../index.ts';
export type ActionPanelCloseProps = ButtonProps<"button">;
/**
 * Action panel close button component.
 * This implementation uses `Toast.Close` from `@radix-ui/react-toast`
 * and should be used as a direct child of `ActionPanel.Root`.
 */
export declare const ActionPanelClose: import('react').ForwardRefExoticComponent<Omit<ActionPanelCloseProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
