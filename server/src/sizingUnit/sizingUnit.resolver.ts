import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SizingUnitResolverBase } from "./base/sizingUnit.resolver.base";
import { SizingUnit } from "./base/SizingUnit";
import { SizingUnitService } from "./sizingUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SizingUnit)
export class SizingUnitResolver extends SizingUnitResolverBase {
  constructor(
    protected readonly service: SizingUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
