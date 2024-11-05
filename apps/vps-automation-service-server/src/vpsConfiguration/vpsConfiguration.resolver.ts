import * as graphql from "@nestjs/graphql";
import { VpsConfigurationResolverBase } from "./base/vpsConfiguration.resolver.base";
import { VpsConfiguration } from "./base/VpsConfiguration";
import { VpsConfigurationService } from "./vpsConfiguration.service";

@graphql.Resolver(() => VpsConfiguration)
export class VpsConfigurationResolver extends VpsConfigurationResolverBase {
  constructor(protected readonly service: VpsConfigurationService) {
    super(service);
  }
}
