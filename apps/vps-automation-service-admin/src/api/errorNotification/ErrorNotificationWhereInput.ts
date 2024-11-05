import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ErrorNotificationWhereInput = {
  errorType?: StringNullableFilter;
  id?: StringFilter;
  isResolved?: BooleanNullableFilter;
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
