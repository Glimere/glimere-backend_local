import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WishlistItemsResolverBase } from "./base/wishlistItems.resolver.base";
import { WishlistItems } from "./base/WishlistItems";
import { WishlistItemsService } from "./wishlistItems.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WishlistItems)
export class WishlistItemsResolver extends WishlistItemsResolverBase {
  constructor(
    protected readonly service: WishlistItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
