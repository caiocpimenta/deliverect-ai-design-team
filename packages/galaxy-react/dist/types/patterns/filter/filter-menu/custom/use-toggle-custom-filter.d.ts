import { FilterState } from '../filter-menu.context';
/**
 * A hook to manage the open state of a custom filter inside a filter menu.
 * This hook should be used in combination with the `Filter.Custom` component.
 *
 * @param id - The ID of the filter. This should be the same ID as the one passed to the `Filter.Custom` component.
 * @returns A tuple with the first element being a boolean indicating if the filter is open, and the second element being a function to set the open state.
 */
export declare const useToggleCustomFilter: (id: string) => FilterState;
