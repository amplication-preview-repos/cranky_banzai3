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
  VpsConfiguration as PrismaVpsConfiguration,
} from "@prisma/client";

export class VpsConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VpsConfigurationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.vpsConfiguration.count(args);
  }

  async vpsConfigurations(
    args: Prisma.VpsConfigurationFindManyArgs
  ): Promise<PrismaVpsConfiguration[]> {
    return this.prisma.vpsConfiguration.findMany(args);
  }
  async vpsConfiguration(
    args: Prisma.VpsConfigurationFindUniqueArgs
  ): Promise<PrismaVpsConfiguration | null> {
    return this.prisma.vpsConfiguration.findUnique(args);
  }
  async createVpsConfiguration(
    args: Prisma.VpsConfigurationCreateArgs
  ): Promise<PrismaVpsConfiguration> {
    return this.prisma.vpsConfiguration.create(args);
  }
  async updateVpsConfiguration(
    args: Prisma.VpsConfigurationUpdateArgs
  ): Promise<PrismaVpsConfiguration> {
    return this.prisma.vpsConfiguration.update(args);
  }
  async deleteVpsConfiguration(
    args: Prisma.VpsConfigurationDeleteArgs
  ): Promise<PrismaVpsConfiguration> {
    return this.prisma.vpsConfiguration.delete(args);
  }
}