/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VpsConfigurationService } from "../vpsConfiguration.service";
import { VpsConfigurationCreateInput } from "./VpsConfigurationCreateInput";
import { VpsConfiguration } from "./VpsConfiguration";
import { VpsConfigurationFindManyArgs } from "./VpsConfigurationFindManyArgs";
import { VpsConfigurationWhereUniqueInput } from "./VpsConfigurationWhereUniqueInput";
import { VpsConfigurationUpdateInput } from "./VpsConfigurationUpdateInput";

export class VpsConfigurationControllerBase {
  constructor(protected readonly service: VpsConfigurationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VpsConfiguration })
  async createVpsConfiguration(
    @common.Body() data: VpsConfigurationCreateInput
  ): Promise<VpsConfiguration> {
    return await this.service.createVpsConfiguration({
      data: data,
      select: {
        cpuCores: true,
        createdAt: true,
        diskSpace: true,
        id: true,
        osVersion: true,
        ramSize: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VpsConfiguration] })
  @ApiNestedQuery(VpsConfigurationFindManyArgs)
  async vpsConfigurations(
    @common.Req() request: Request
  ): Promise<VpsConfiguration[]> {
    const args = plainToClass(VpsConfigurationFindManyArgs, request.query);
    return this.service.vpsConfigurations({
      ...args,
      select: {
        cpuCores: true,
        createdAt: true,
        diskSpace: true,
        id: true,
        osVersion: true,
        ramSize: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VpsConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vpsConfiguration(
    @common.Param() params: VpsConfigurationWhereUniqueInput
  ): Promise<VpsConfiguration | null> {
    const result = await this.service.vpsConfiguration({
      where: params,
      select: {
        cpuCores: true,
        createdAt: true,
        diskSpace: true,
        id: true,
        osVersion: true,
        ramSize: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VpsConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVpsConfiguration(
    @common.Param() params: VpsConfigurationWhereUniqueInput,
    @common.Body() data: VpsConfigurationUpdateInput
  ): Promise<VpsConfiguration | null> {
    try {
      return await this.service.updateVpsConfiguration({
        where: params,
        data: data,
        select: {
          cpuCores: true,
          createdAt: true,
          diskSpace: true,
          id: true,
          osVersion: true,
          ramSize: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VpsConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVpsConfiguration(
    @common.Param() params: VpsConfigurationWhereUniqueInput
  ): Promise<VpsConfiguration | null> {
    try {
      return await this.service.deleteVpsConfiguration({
        where: params,
        select: {
          cpuCores: true,
          createdAt: true,
          diskSpace: true,
          id: true,
          osVersion: true,
          ramSize: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
