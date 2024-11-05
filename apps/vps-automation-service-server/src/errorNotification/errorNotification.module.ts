import { Module } from "@nestjs/common";
import { ErrorNotificationModuleBase } from "./base/errorNotification.module.base";
import { ErrorNotificationService } from "./errorNotification.service";
import { ErrorNotificationController } from "./errorNotification.controller";
import { ErrorNotificationResolver } from "./errorNotification.resolver";

@Module({
  imports: [ErrorNotificationModuleBase],
  controllers: [ErrorNotificationController],
  providers: [ErrorNotificationService, ErrorNotificationResolver],
  exports: [ErrorNotificationService],
})
export class ErrorNotificationModule {}
