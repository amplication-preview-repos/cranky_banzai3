import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScriptWhereUniqueInput } from "../script/ScriptWhereUniqueInput";

export type DeploymentWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  log?: StringNullableFilter;
  script?: ScriptWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
};
