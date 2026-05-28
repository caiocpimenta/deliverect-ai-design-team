import { ReactElement, ReactNode } from 'react';
import { InlineProps } from '../../foundations/layout';
export type PaginationProps = Omit<InlineProps, "children" | "onChange"> & {
    /** The total number of items in the list */
    total: number;
    /** The current page */
    page: number;
    /** The number of elements in one page */
    pageSize: number;
    /** An optional subject to display in the formatting function */
    subject?: string;
    /** Function that gets called when the page changes */
    onPageChange: (page: number) => void;
    /** Function to format the element range that is displayed */
    showElementRange?: (startElement: number, endElement: number, total: number, subject?: string) => ReactNode;
    /** Accessible label for the item range */
    itemRangeLabel?: string;
    /** Accessible label for the first page button */
    firstPageLabel?: string;
    /** Accessible label for the previous page button */
    previousPageLabel?: string;
    /** Accessible label for the next page button */
    nextPageLabel?: string;
    /** Accessible label for the last page button */
    lastPageLabel?: string;
};
/**
 * This is a pagination component that allows you to navigate through a list of items.
 * It is rendered at the top of the list as a quick way to navigate between pages.
 *
 * This is always a controlled component because the page would typically be linked together with
 * some sort of (external) data fetching mechanism.
 */
export declare const Pagination: ({ total, page: value, pageSize, subject, onPageChange: onChange, showElementRange, itemRangeLabel, firstPageLabel, previousPageLabel, nextPageLabel, lastPageLabel, ...rest }: PaginationProps) => ReactElement;
