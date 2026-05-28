import { MessageToastVariants } from '@deliverect/galaxy-styles';
/**
 * @internal This context is intended for internal use within the galaxy-react package only.
 * Do not import or use this context directly in application code.
 */
type ToastContextType = {
    status: MessageToastVariants["status"];
};
/**
 * @internal This context is intended for internal use within the galaxy-react package only.
 * Do not import or use this context directly in application code.
 */
export declare const ToastContext: import('react').Context<ToastContextType | undefined>;
/**
 * @internal This hook is intended for internal use within the galaxy-react package only.
 * Do not import or use this hook directly in application code.
 */
export declare const useToastContext: () => ToastContextType;
export {};
