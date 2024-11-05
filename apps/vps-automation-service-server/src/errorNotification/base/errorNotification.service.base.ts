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
  ErrorNotification as PrismaErrorNotification,
} from "@prisma/client";

export class ErrorNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ErrorNotificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.errorNotification.count(args);
  }

  async errorNotifications(
    args: Prisma.ErrorNotificationFindManyArgs
  ): Promise<PrismaErrorNotification[]> {
    return this.prisma.errorNotification.findMany(args);
  }
  async errorNotification(
    args: Prisma.ErrorNotificationFindUniqueArgs
  ): Promise<PrismaErrorNotification | null> {
    return this.prisma.errorNotification.findUnique(args);
  }
  async createErrorNotification(
    args: Prisma.ErrorNotificationCreateArgs
  ): Promise<PrismaErrorNotification> {
    return this.prisma.errorNotification.create(args);
  }
  async updateErrorNotification(
    args: Prisma.ErrorNotificationUpdateArgs
  ): Promise<PrismaErrorNotification> {
    return this.prisma.errorNotification.update(args);
  }
  async deleteErrorNotification(
    args: Prisma.ErrorNotificationDeleteArgs
  ): Promise<PrismaErrorNotification> {
    return this.prisma.errorNotification.delete(args);
  }
}