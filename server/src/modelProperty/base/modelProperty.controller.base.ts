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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ModelPropertyService } from "../modelProperty.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ModelPropertyCreateInput } from "./ModelPropertyCreateInput";
import { ModelProperty } from "./ModelProperty";
import { ModelPropertyFindManyArgs } from "./ModelPropertyFindManyArgs";
import { ModelPropertyWhereUniqueInput } from "./ModelPropertyWhereUniqueInput";
import { ModelPropertyUpdateInput } from "./ModelPropertyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ModelPropertyControllerBase {
  constructor(
    protected readonly service: ModelPropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ModelProperty })
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createModelProperty(
    @common.Body() data: ModelPropertyCreateInput
  ): Promise<ModelProperty> {
    return await this.service.createModelProperty({
      data: {
        ...data,

        models: data.models
          ? {
              connect: data.models,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        models: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ModelProperty] })
  @ApiNestedQuery(ModelPropertyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async modelProperties(
    @common.Req() request: Request
  ): Promise<ModelProperty[]> {
    const args = plainToClass(ModelPropertyFindManyArgs, request.query);
    return this.service.modelProperties({
      ...args,
      select: {
        createdAt: true,
        id: true,

        models: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ModelProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async modelProperty(
    @common.Param() params: ModelPropertyWhereUniqueInput
  ): Promise<ModelProperty | null> {
    const result = await this.service.modelProperty({
      where: params,
      select: {
        createdAt: true,
        id: true,

        models: {
          select: {
            id: true,
          },
        },

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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ModelProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateModelProperty(
    @common.Param() params: ModelPropertyWhereUniqueInput,
    @common.Body() data: ModelPropertyUpdateInput
  ): Promise<ModelProperty | null> {
    try {
      return await this.service.updateModelProperty({
        where: params,
        data: {
          ...data,

          models: data.models
            ? {
                connect: data.models,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          models: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: ModelProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteModelProperty(
    @common.Param() params: ModelPropertyWhereUniqueInput
  ): Promise<ModelProperty | null> {
    try {
      return await this.service.deleteModelProperty({
        where: params,
        select: {
          createdAt: true,
          id: true,

          models: {
            select: {
              id: true,
            },
          },

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