import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ShippingAddressResolverBase } from "./base/shippingAddress.resolver.base";
import { ShippingAddress } from "./base/ShippingAddress";
import { ShippingAddressService } from "./shippingAddress.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShippingAddress)
export class ShippingAddressResolver extends ShippingAddressResolverBase {
  constructor(
    protected readonly service: ShippingAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
