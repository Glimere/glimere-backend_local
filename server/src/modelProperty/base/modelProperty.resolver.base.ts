/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ModelProperty } from "./ModelProperty";
import { ModelPropertyCountArgs } from "./ModelPropertyCountArgs";
import { ModelPropertyFindManyArgs } from "./ModelPropertyFindManyArgs";
import { ModelPropertyFindUniqueArgs } from "./ModelPropertyFindUniqueArgs";
import { CreateModelPropertyArgs } from "./CreateModelPropertyArgs";
import { UpdateModelPropertyArgs } from "./UpdateModelPropertyArgs";
import { DeleteModelPropertyArgs } from "./DeleteModelPropertyArgs";
import { Model } from "../../model/base/Model";
import { ModelPropertyService } from "../modelProperty.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModelProperty)
export class ModelPropertyResolverBase {
  constructor(
    protected readonly service: ModelPropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "read",
    possession: "any",
  })
  async _modelPropertiesMeta(
    @graphql.Args() args: ModelPropertyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ModelProperty])
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "read",
    possession: "any",
  })
  async modelProperties(
    @graphql.Args() args: ModelPropertyFindManyArgs
  ): Promise<ModelProperty[]> {
    return this.service.modelProperties(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ModelProperty, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "read",
    possession: "own",
  })
  async modelProperty(
    @graphql.Args() args: ModelPropertyFindUniqueArgs
  ): Promise<ModelProperty | null> {
    const result = await this.service.modelProperty(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ModelProperty)
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "create",
    possession: "any",
  })
  async createModelProperty(
    @graphql.Args() args: CreateModelPropertyArgs
  ): Promise<ModelProperty> {
    return await this.service.createModelProperty({
      ...args,
      data: {
        ...args.data,

        models: args.data.models
          ? {
              connect: args.data.models,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ModelProperty)
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "update",
    possession: "any",
  })
  async updateModelProperty(
    @graphql.Args() args: UpdateModelPropertyArgs
  ): Promise<ModelProperty | null> {
    try {
      return await this.service.updateModelProperty({
        ...args,
        data: {
          ...args.data,

          models: args.data.models
            ? {
                connect: args.data.models,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ModelProperty)
  @nestAccessControl.UseRoles({
    resource: "ModelProperty",
    action: "delete",
    possession: "any",
  })
  async deleteModelProperty(
    @graphql.Args() args: DeleteModelPropertyArgs
  ): Promise<ModelProperty | null> {
    try {
      return await this.service.deleteModelProperty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Model, {
    nullable: true,
    name: "models",
  })
  @nestAccessControl.UseRoles({
    resource: "Model",
    action: "read",
    possession: "any",
  })
  async getModels(
    @graphql.Parent() parent: ModelProperty
  ): Promise<Model | null> {
    const result = await this.service.getModels(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}