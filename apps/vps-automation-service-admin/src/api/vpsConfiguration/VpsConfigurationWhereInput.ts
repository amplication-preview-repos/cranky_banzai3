import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VpsConfigurationWhereInput = {
  cpuCores?: IntNullableFilter;
  diskSpace?: IntNullableFilter;
  id?: StringFilter;
  osVersion?: StringNullableFilter;
  ramSize?: IntNullableFilter;
};
