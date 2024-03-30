import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubSubcategoryResolverBase } from "./base/subSubcategory.resolver.base";
import { SubSubcategory } from "./base/SubSubcategory";
import { SubSubcategoryService } from "./subSubcategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubSubcategory)
export class SubSubcategoryResolver extends SubSubcategoryResolverBase {
  constructor(
    protected readonly service: SubSubcategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
