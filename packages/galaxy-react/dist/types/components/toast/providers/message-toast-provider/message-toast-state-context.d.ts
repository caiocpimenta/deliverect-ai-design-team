import { MessageToastVariants } from '@deliverect/galaxy-styles';
export type ToastStatus = MessageToastVariants["status"];
export type ToastConfigSimple = {
    /**
     * A "simple" toast where the <Body> is just a string description.
     */
    type: "simple";
    status: ToastStatus;
    description: string;
    duration?: number;
    onDismiss?: () => void;
};
export type ToastConfigCustom = {
    /**
     * A "custom" toast where the <Body> is a custom JSX element.
     */
    type: "custom";
    status: ToastStatus;
    renderBody: () => JSX.Element;
    duration?: number;
    onDismiss?: () => void;
};
export type ToastConfig = ToastConfigSimple | ToastConfigCustom;
export type Toast = {
    id: string;
    instanceKey: string;
    config: ToastConfig;
};
export type ToastOptions = {
    id?: string;
    duration?: number;
    onDismiss?: () => void;
};
export type ToastCreatorFunction = (content: string | (() => JSX.Element), options?: ToastOptions) => string;
export declare const MessageToastStateReadContext: import('react').Context<{
    toasts: Toast[];
} | null>;
export declare const MessageToastStateDispatchContext: import('react').Context<{
    createOrUpdateToast: (status: ToastStatus) => ToastCreatorFunction;
    dismissToast: (id: string) => void;
} | null>;
export declare const useMessageToastStateReadContext: () => {
    toasts: Toast[];
};
export declare const useMessageToastStateDispatchContext: () => {
    success: ToastCreatorFunction;
    info: ToastCreatorFunction;
    warning: ToastCreatorFunction;
    critical: ToastCreatorFunction;
    neutral: ToastCreatorFunction;
    dismiss: (id: string) => void;
};
