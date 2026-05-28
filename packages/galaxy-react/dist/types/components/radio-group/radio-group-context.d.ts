export type RadioGroupContextType = {
    size?: "sm" | "md" | "lg";
};
export declare const RadioGroupContextProvider: import('react').Provider<RadioGroupContextType>;
/**
 * A hook to provide the Radio group root context to the Radio group component.
 *
 * @returns The Radio group root context if it is defined
 */
export declare const useRadioGroupContext: () => RadioGroupContextType | undefined;
