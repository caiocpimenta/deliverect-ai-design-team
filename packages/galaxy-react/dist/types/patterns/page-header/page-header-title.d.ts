import { HeadingProps } from '../../foundations/typography';
export type PageHeaderTitleProps = HeadingProps<"h1">;
/**
 * The default implementation for the title component for a PageHeader.
 */
export declare const PageHeaderTitle: import('react').ForwardRefExoticComponent<Omit<PageHeaderTitleProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
