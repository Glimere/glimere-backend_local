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
import { ApparelType } from "./ApparelType";
import { ApparelTypeCountArgs } from "./ApparelTypeCountArgs";
import { ApparelTypeFindManyArgs } from "./ApparelTypeFindManyArgs";
import { ApparelTypeFindUniqueArgs } from "./ApparelTypeFindUniqueArgs";
import { CreateApparelTypeArgs } from "./CreateApparelTypeArgs";
import { UpdateApparelTypeArgs } from "./UpdateApparelTypeArgs";
import { DeleteApparelTypeArgs } from "./DeleteApparelTypeArgs";
import { ApparelFindManyArgs } from "../../apparel/base/ApparelFindManyArgs";
import { Apparel } from "../../apparel/base/Apparel";
import { SizeFindManyArgs } from "../../size/base/SizeFindManyArgs";
import { Size } from "../../size/base/Size";
import { ApparelTypeService } from "../apparelType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApparelType)
export class ApparelTypeResolverBase {
  constructor(
    protected readonly service: ApparelTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "read",
    possession: "any",
  })
  async _apparelTypesMeta(
    @graphql.Args() args: ApparelTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ApparelType])
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "read",
    possession: "any",
  })
  async apparelTypes(
    @graphql.Args() args: ApparelTypeFindManyArgs
  ): Promise<ApparelType[]> {
    return this.service.apparelTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ApparelType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "read",
    possession: "own",
  })
  async apparelType(
    @graphql.Args() args: ApparelTypeFindUniqueArgs
  ): Promise<ApparelType | null> {
    const result = await this.service.apparelType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApparelType)
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "create",
    possession: "any",
  })
  async createApparelType(
    @graphql.Args() args: CreateApparelTypeArgs
  ): Promise<ApparelType> {
    return await this.service.createApparelType({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApparelType)
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "update",
    possession: "any",
  })
  async updateApparelType(
    @graphql.Args() args: UpdateApparelTypeArgs
  ): Promise<ApparelType | null> {
    try {
      return await this.service.updateApparelType({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => ApparelType)
  @nestAccessControl.UseRoles({
    resource: "ApparelType",
    action: "delete",
    possession: "any",
  })
  async deleteApparelType(
    @graphql.Args() args: DeleteApparelTypeArgs
  ): Promise<ApparelType | null> {
    try {
      return await this.service.deleteApparelType(args);
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
  @graphql.ResolveField(() => [Apparel], { name: "apparels" })
  @nestAccessControl.UseRoles({
    resource: "Apparel",
    action: "read",
    possession: "any",
  })
  async findApparels(
    @graphql.Parent() parent: ApparelType,
    @graphql.Args() args: ApparelFindManyArgs
  ): Promise<Apparel[]> {
    const results = await this.service.findApparels(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Size], { name: "sizes" })
  @nestAccessControl.UseRoles({
    resource: "Size",
    action: "read",
    possession: "any",
  })
  async findSizes(
    @graphql.Parent() parent: ApparelType,
    @graphql.Args() args: SizeFindManyArgs
  ): Promise<Size[]> {
    const results = await this.service.findSizes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}