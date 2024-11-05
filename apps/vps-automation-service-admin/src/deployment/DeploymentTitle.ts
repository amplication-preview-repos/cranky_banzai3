import { Deployment as TDeployment } from "../api/deployment/Deployment";

export const DEPLOYMENT_TITLE_FIELD = "id";

export const DeploymentTitle = (record: TDeployment): string => {
  return record.id?.toString() || String(record.id);
};
