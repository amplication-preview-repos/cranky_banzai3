import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VpsConfigurationService } from "./vpsConfiguration.service";
import { VpsConfigurationControllerBase } from "./base/vpsConfiguration.controller.base";

@swagger.ApiTags("vpsConfigurations")
@common.Controller("vpsConfigurations")
export class VpsConfigurationController extends VpsConfigurationControllerBase {
  constructor(protected readonly service: VpsConfigurationService) {
    super(service);
  }
}
