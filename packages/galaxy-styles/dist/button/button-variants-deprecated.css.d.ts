import { ButtonTypeVariant, OldStatus } from "./types";
export declare function oldFilledButton(status: OldStatus): ButtonTypeVariant<"filled">;
export declare function oldOutlineButton(status: OldStatus): ButtonTypeVariant<"outline">;
export declare function oldGhostButton(status: OldStatus): ButtonTypeVariant<"ghost">;
/** @deprecated This version will no longer be used at all. */
export declare function subtleButton(status: OldStatus): ButtonTypeVariant<"subtle">;
