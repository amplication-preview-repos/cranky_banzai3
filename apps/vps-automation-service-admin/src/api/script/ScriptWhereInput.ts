import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DeploymentListRelationFilter } from "../deployment/DeploymentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ScriptWhereInput = {
  content?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  deployments?: DeploymentListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
  name?: StringNullableFilter;
};
