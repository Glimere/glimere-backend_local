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
import { Size } from "./Size";
import { SizeCountArgs } from "./SizeCountArgs";
import { SizeFindManyArgs } from "./SizeFindManyArgs";
import { SizeFindUniqueArgs } from "./SizeFindUniqueArgs";
import { CreateSizeArgs } from "./CreateSizeArgs";
import { UpdateSizeArgs } from "./UpdateSizeArgs";
import { DeleteSizeArgs } from "./DeleteSizeArgs";
import { Apparel } from "../../apparel/base/Apparel";
import { ApparelType } from "../../apparelType/base/ApparelType";
import { User } from "../../user/base/User";
import { SizeService } from "../size.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Size)
export class SizeResolverBase {
  constructor(
    protected readonly service: SizeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "read",
    possession: "any",
  })
  async _sizesMeta(
    @graphql.Args() args: SizeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Size])
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "read",
    possession: "any",
  })
  async sizes(@graphql.Args() args: SizeFindManyArgs): Promise<Size[]> {
    return this.service.sizes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Size, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "read",
    possession: "own",
  })
  async size(@graphql.Args() args: SizeFindUniqueArgs): Promise<Size | null> {
    const result = await this.service.size(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Size)
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "create",
    possession: "any",
  })
  async createSize(@graphql.Args() args: CreateSizeArgs): Promise<Size> {
    return await this.service.createSize({
      ...args,
      data: {
        ...args.data,

        apparel: args.data.apparel
          ? {
              connect: args.data.apparel,
            }
          : undefined,

        apparelType: args.data.apparelType
          ? {
              connect: args.data.apparelType,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Size)
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "update",
    possession: "any",
  })
  async updateSize(@graphql.Args() args: UpdateSizeArgs): Promise<Size | null> {
    try {
      return await this.service.updateSize({
        ...args,
        data: {
          ...args.data,

          apparel: args.data.apparel
            ? {
                connect: args.data.apparel,
              }
            : undefined,

          apparelType: args.data.apparelType
            ? {
                connect: args.data.apparelType,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Size)
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "delete",
    possession: "any",
  })
  async deleteSize(@graphql.Args() args: DeleteSizeArgs): Promise<Size | null> {
    try {
      return await this.service.deleteSize(args);
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
  @graphql.ResolveField(() => Apparel, {
    nullable: true,
    name: "apparel",
  })
  @nestAccessControl.UseRoles({
    resource: "Apparel",
    action: "read",
    possession: "any",
  })
  async getApparel(@graphql.Parent() parent: Size): Promise<Apparel | null> {
    const result = await this.service.getApparel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ApparelType, {
    nullable: true,
    name: "apparelType",
  })
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "read",
    possession: "any",
  })
  async getApparelType(
    @graphql.Parent() parent: Size
  ): Promise<ApparelType | null> {
    const result = await this.service.getApparelType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Size): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}