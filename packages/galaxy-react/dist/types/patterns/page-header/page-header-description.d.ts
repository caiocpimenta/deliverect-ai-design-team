import { TextProps } from '../../foundations/typography';
export type PageHeaderDescriptionProps = TextProps<"div">;
/**
 * The default implementation for the description component for a PageHeader.
 * Defaults to a div with secondary color.
 */
export declare const PageHeaderDescription: import('react').ForwardRefExoticComponent<Omit<PageHeaderDescriptionProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
