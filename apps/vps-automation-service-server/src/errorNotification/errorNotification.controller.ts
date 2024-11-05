import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorNotificationService } from "./errorNotification.service";
import { ErrorNotificationControllerBase } from "./base/errorNotification.controller.base";

@swagger.ApiTags("errorNotifications")
@common.Controller("errorNotifications")
export class ErrorNotificationController extends ErrorNotificationControllerBase {
  constructor(protected readonly service: ErrorNotificationService) {
    super(service);
  }
}
