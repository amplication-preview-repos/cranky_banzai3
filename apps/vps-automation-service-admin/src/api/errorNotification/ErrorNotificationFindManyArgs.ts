import { ErrorNotificationWhereInput } from "./ErrorNotificationWhereInput";
import { ErrorNotificationOrderByInput } from "./ErrorNotificationOrderByInput";

export type ErrorNotificationFindManyArgs = {
  where?: ErrorNotificationWhereInput;
  orderBy?: Array<ErrorNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
