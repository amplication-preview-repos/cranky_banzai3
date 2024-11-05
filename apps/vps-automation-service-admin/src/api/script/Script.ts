import { Deployment } from "../deployment/Deployment";

export type Script = {
  content: string | null;
  createdAt: Date;
  creationDate: Date | null;
  deployments?: Array<Deployment>;
  id: string;
  isActive: boolean | null;
  lastUpdated: Date | null;
  name: string | null;
  updatedAt: Date;
};
