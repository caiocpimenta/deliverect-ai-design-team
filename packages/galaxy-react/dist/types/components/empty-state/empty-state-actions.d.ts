import { StackProps } from '../../foundations/layout/stack';
export type EmptyStateActionsProps = Omit<React.ComponentPropsWithRef<"div">, "color"> & StackProps;
export declare const EmptyStateActions: import('react').ForwardRefExoticComponent<Omit<EmptyStateActionsProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
