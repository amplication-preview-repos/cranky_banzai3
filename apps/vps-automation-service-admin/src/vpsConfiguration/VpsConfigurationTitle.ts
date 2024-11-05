import { VpsConfiguration as TVpsConfiguration } from "../api/vpsConfiguration/VpsConfiguration";

export const VPSCONFIGURATION_TITLE_FIELD = "osVersion";

export const VpsConfigurationTitle = (record: TVpsConfiguration): string => {
  return record.osVersion?.toString() || String(record.id);
};
