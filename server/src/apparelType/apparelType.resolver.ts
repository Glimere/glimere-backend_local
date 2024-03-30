import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApparelTypeResolverBase } from "./base/apparelType.resolver.base";
import { ApparelType } from "./base/ApparelType";
import { ApparelTypeService } from "./apparelType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApparelType)
export class ApparelTypeResolver extends ApparelTypeResolverBase {
  constructor(
    protected readonly service: ApparelTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
