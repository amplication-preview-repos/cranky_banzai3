import { ScriptWhereUniqueInput } from "../script/ScriptWhereUniqueInput";

export type DeploymentUpdateInput = {
  endTime?: Date | null;
  log?: string | null;
  script?: ScriptWhereUniqueInput | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
