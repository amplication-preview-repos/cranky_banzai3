import { VpsConfigurationWhereInput } from "./VpsConfigurationWhereInput";
import { VpsConfigurationOrderByInput } from "./VpsConfigurationOrderByInput";

export type VpsConfigurationFindManyArgs = {
  where?: VpsConfigurationWhereInput;
  orderBy?: Array<VpsConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
