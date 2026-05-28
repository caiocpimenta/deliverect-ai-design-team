import { MessageToastVariants } from '@deliverect/galaxy-styles';
import * as ToastUI from "@radix-ui/react-toast";
export type MessageToastRootProps = ToastUI.ToastProps & MessageToastVariants;
export declare const MessageToastRoot: import('react').ForwardRefExoticComponent<ToastUI.ToastProps & {
    status?: "critical" | "warning" | "info" | "neutral" | "success" | undefined;
} & import('react').RefAttributes<HTMLLIElement>>;
