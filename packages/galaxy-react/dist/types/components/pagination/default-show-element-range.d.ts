import { ReactNode } from 'react';
/**
 * Default formatting of the range of elements shown in the pagination component
 *
 * @param startElement The first element in the range
 * @param endElement The last element in the range
 * @param total The total number of elements
 * @param subject An optional subject to display after the total number of elements
 * @returns A formatted string that shows the range of elements
 */
export declare const defaultShowElementRange: (startElement: number, endElement: number, total: number, subject?: string) => ReactNode;
