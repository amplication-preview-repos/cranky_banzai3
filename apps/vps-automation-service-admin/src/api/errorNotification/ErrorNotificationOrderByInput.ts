import { SortOrder } from "../../util/SortOrder";

export type ErrorNotificationOrderByInput = {
  createdAt?: SortOrder;
  errorType?: SortOrder;
  id?: SortOrder;
  isResolved?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
