/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Script as PrismaScript,
  Deployment as PrismaDeployment,
} from "@prisma/client";

export class ScriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScriptCountArgs, "select">): Promise<number> {
    return this.prisma.script.count(args);
  }

  async scripts(args: Prisma.ScriptFindManyArgs): Promise<PrismaScript[]> {
    return this.prisma.script.findMany(args);
  }
  async script(
    args: Prisma.ScriptFindUniqueArgs
  ): Promise<PrismaScript | null> {
    return this.prisma.script.findUnique(args);
  }
  async createScript(args: Prisma.ScriptCreateArgs): Promise<PrismaScript> {
    return this.prisma.script.create(args);
  }
  async updateScript(args: Prisma.ScriptUpdateArgs): Promise<PrismaScript> {
    return this.prisma.script.update(args);
  }
  async deleteScript(args: Prisma.ScriptDeleteArgs): Promise<PrismaScript> {
    return this.prisma.script.delete(args);
  }

  async findDeployments(
    parentId: string,
    args: Prisma.DeploymentFindManyArgs
  ): Promise<PrismaDeployment[]> {
    return this.prisma.script
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deployments(args);
  }
}
