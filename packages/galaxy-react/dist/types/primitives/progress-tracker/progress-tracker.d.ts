import { InlineProps } from '../../foundations';
export type ProgressTrackerProps = Omit<InlineProps, "children"> & {
    currentStep: number;
    totalSteps: number;
};
export declare const ProgressTracker: import('react').ForwardRefExoticComponent<Omit<InlineProps, "children"> & {
    currentStep: number;
    totalSteps: number;
} & import('react').RefAttributes<HTMLDivElement>>;
