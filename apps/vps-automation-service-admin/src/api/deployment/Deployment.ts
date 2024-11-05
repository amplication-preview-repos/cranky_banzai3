import { Script } from "../script/Script";

export type Deployment = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  log: string | null;
  script?: Script | null;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
