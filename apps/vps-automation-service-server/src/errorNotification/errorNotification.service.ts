import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorNotificationServiceBase } from "./base/errorNotification.service.base";

@Injectable()
export class ErrorNotificationService extends ErrorNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
