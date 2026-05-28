import { ButtonTypeVariant, OldStatus, Status } from "./types";
export declare function transparentButton(status: OldStatus): ButtonTypeVariant<"transparent">;
/**
 * Button that represents the primary action.
 *
 * TODO [DLV-1437] Rename the "filled" button type variant to "primary".
 * The primary button will be the default button style,
 * only accepting "default" and "critical" as status.
 */
export declare function primaryButton(status: Status): ButtonTypeVariant<"filled">;
/**
 * Button that represents the secondary action.
 *
 * TODO [DLV-1437] Rename the "outline" button type variant to "secondary".
 * The secondary button will only accept "default" and "critical" as status.
 * The secondary critical button will be a ghost button.
 */
export declare function secondaryButton(status: Status): ButtonTypeVariant<"outline">;
/**
 * Button that represents the tertiary action.
 *
 * TODO [DLV-1437] Rename the "ghost" button type variant to "tertiary".
 * The tertiary button will exist with "default" as status.
 * The tertiary critical button does not exist.
 */
export declare function tertiaryButton(status: Status): ButtonTypeVariant<"ghost">;
