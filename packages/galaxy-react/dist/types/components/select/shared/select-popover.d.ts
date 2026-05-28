import { default as React, ReactElement } from 'react';
export type SelectPopoverProps = {
    /**
     * Indicates if a search input should be shown at the top.
     * Defaults to false.
     */
    isSearchable?: boolean;
    /**
     * Placeholder for the search input.
     */
    placeholder?: string;
    /**
     * The content to show if there are no options after searching.
     * This does not show up if there are no options provided.
     */
    contentEmpty?: string;
    /**
     * Callback that gets called when the search input value changes.
     *
     * @param query Value of the search input
     */
    onInputChange: (query: string) => void;
    /**
     * Preferred position relative to the anchor for rendering when open
     * Defaults to bottom.
     */
    position?: "top" | "right" | "bottom" | "left";
    /**
     * Preferred alignment against the anchor
     * Defaults to center.
     */
    align?: "start" | "center" | "end";
    /**
     * Content to render as the options in the listbox
     */
    children: React.ReactNode;
};
declare const SelectPopover: ({ isSearchable, placeholder, onInputChange, contentEmpty, position, align, children, }: SelectPopoverProps) => ReactElement;
export default SelectPopover;
