/**
 * The global `ToastProvider` component that wraps the entire target client application.
 *
 * If/When we add more toast providers (e.g. for `ProgressToast`), then we can just add it
 * here, plus its renderer (which would have its `ProgressToastViewport` and `ProgressToastViewport`).
 *
 * E.g. I think this will work:
 *
 * ```tsx
 *  <MessageToastStateProvider>
 *    <MessageToastRenderer />  // renders message toasts within its own provider and viewport
 *    <ProgressToastStateProvider>
 *      <ProgressToastRenderer /> // renders progress toasts within its own provider and viewport
 *      {children}
 *    </ProgressToastStateProvider>
 *  </MessageToastStateProvider>
 * ```
 */
export declare const ToastProvider: ({ children }: React.PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useToast: () => {
    success: import('../message-toast-provider/message-toast-state-context').ToastCreatorFunction;
    info: import('../message-toast-provider/message-toast-state-context').ToastCreatorFunction;
    warning: import('../message-toast-provider/message-toast-state-context').ToastCreatorFunction;
    critical: import('../message-toast-provider/message-toast-state-context').ToastCreatorFunction;
    neutral: import('../message-toast-provider/message-toast-state-context').ToastCreatorFunction;
    dismiss: (id: string) => void;
};
