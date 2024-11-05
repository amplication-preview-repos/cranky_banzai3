import { ErrorNotification as TErrorNotification } from "../api/errorNotification/ErrorNotification";

export const ERRORNOTIFICATION_TITLE_FIELD = "errorType";

export const ErrorNotificationTitle = (record: TErrorNotification): string => {
  return record.errorType?.toString() || String(record.id);
};
