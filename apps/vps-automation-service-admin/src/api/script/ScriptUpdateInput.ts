import { DeploymentUpdateManyWithoutScriptsInput } from "./DeploymentUpdateManyWithoutScriptsInput";

export type ScriptUpdateInput = {
  content?: string | null;
  creationDate?: Date | null;
  deployments?: DeploymentUpdateManyWithoutScriptsInput;
  isActive?: boolean | null;
  lastUpdated?: Date | null;
  name?: string | null;
};
