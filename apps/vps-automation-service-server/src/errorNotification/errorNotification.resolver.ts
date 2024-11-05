import * as graphql from "@nestjs/graphql";
import { ErrorNotificationResolverBase } from "./base/errorNotification.resolver.base";
import { ErrorNotification } from "./base/ErrorNotification";
import { ErrorNotificationService } from "./errorNotification.service";

@graphql.Resolver(() => ErrorNotification)
export class ErrorNotificationResolver extends ErrorNotificationResolverBase {
  constructor(protected readonly service: ErrorNotificationService) {
    super(service);
  }
}
