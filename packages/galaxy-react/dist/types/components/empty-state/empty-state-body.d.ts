import { StackProps } from '../../foundations/layout/stack';
export type EmptyStateBodyProps = Omit<React.ComponentPropsWithRef<"div">, "color"> & StackProps;
export declare const EmptyStateBody: import('react').ForwardRefExoticComponent<Omit<EmptyStateBodyProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
