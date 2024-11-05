import { DeploymentCreateNestedManyWithoutScriptsInput } from "./DeploymentCreateNestedManyWithoutScriptsInput";

export type ScriptCreateInput = {
  content?: string | null;
  creationDate?: Date | null;
  deployments?: DeploymentCreateNestedManyWithoutScriptsInput;
  isActive?: boolean | null;
  lastUpdated?: Date | null;
  name?: string | null;
};
