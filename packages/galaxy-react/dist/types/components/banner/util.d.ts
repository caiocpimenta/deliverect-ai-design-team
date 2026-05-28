import { BannerStatus, ButtonStatus } from './type';
/**
 * The button status and the banner status have different names for 2 options
 * This function does the parsing to return the expected button status
 */
export declare const getButtonStatus: (status: BannerStatus) => ButtonStatus;
