import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ModelPropertyResolverBase } from "./base/modelProperty.resolver.base";
import { ModelProperty } from "./base/ModelProperty";
import { ModelPropertyService } from "./modelProperty.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModelProperty)
export class ModelPropertyResolver extends ModelPropertyResolverBase {
  constructor(
    protected readonly service: ModelPropertyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
