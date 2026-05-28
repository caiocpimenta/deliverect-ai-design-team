import { ReactElement } from 'react';
type ProgressTrackerSectionProps = {
    status: "empty" | "in-progress" | "done";
};
export declare const ProgressTrackerSection: {
    ({ status, }: ProgressTrackerSectionProps): ReactElement;
    displayName: string;
};
export {};
