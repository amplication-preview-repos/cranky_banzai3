import { SortOrder } from "../../util/SortOrder";

export type VpsConfigurationOrderByInput = {
  cpuCores?: SortOrder;
  createdAt?: SortOrder;
  diskSpace?: SortOrder;
  id?: SortOrder;
  osVersion?: SortOrder;
  ramSize?: SortOrder;
  updatedAt?: SortOrder;
};
