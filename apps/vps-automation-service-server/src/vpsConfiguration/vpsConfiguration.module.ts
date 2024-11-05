import { Module } from "@nestjs/common";
import { VpsConfigurationModuleBase } from "./base/vpsConfiguration.module.base";
import { VpsConfigurationService } from "./vpsConfiguration.service";
import { VpsConfigurationController } from "./vpsConfiguration.controller";
import { VpsConfigurationResolver } from "./vpsConfiguration.resolver";

@Module({
  imports: [VpsConfigurationModuleBase],
  controllers: [VpsConfigurationController],
  providers: [VpsConfigurationService, VpsConfigurationResolver],
  exports: [VpsConfigurationService],
})
export class VpsConfigurationModule {}
