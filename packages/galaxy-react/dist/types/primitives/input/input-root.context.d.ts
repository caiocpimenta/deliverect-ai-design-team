export type InputRootContextType = {
    describedBy?: string;
    inputId?: string;
    labelId?: string;
    hasError?: boolean;
    required?: boolean;
};
export declare const InputRootContextProvider: import('react').Provider<InputRootContextType>;
/**
 * A hook to provide the input root context to the input field.
 * Note that this hook will not throw an error if the context is not defined.
 * This is because we don't want the input field to throw an error if it is not used
 * within an `Input.Root` component.
 *
 * @returns The input root context if it is defined
 */
export declare const useInputRootContext: () => InputRootContextType | undefined;
