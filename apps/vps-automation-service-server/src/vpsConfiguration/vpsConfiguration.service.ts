import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VpsConfigurationServiceBase } from "./base/vpsConfiguration.service.base";

@Injectable()
export class VpsConfigurationService extends VpsConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
