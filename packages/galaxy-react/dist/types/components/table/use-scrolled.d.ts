/**
 * Hook to detect if the table is scrolled vertically.
 * If this is the case, it will put data-scrolled on the header row,
 * which will allow us to style the header row differently.
 *
 * @returns A tuple of booleans, the first being if the table is scrolled horizontally, the second being if the table is scrolled vertically.
 */
export declare const useScrolled: (tableWrapperRef: React.RefObject<HTMLElement | null>) => boolean[];
