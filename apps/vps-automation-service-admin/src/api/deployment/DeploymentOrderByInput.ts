import { SortOrder } from "../../util/SortOrder";

export type DeploymentOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  log?: SortOrder;
  scriptId?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
