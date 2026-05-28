import { ReactElement } from 'react';
export type MessageToastProviderProps = {
    children?: React.ReactNode;
    /**
     * Time in milliseconds that each toast should remain visible for.
     * @defaultValue 5000
     */
    duration?: number;
};
export declare const MessageToastProvider: {
    (props: MessageToastProviderProps): ReactElement;
    displayName: string;
};
