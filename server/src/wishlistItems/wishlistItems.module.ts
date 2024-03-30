import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WishlistItemsModuleBase } from "./base/wishlistItems.module.base";
import { WishlistItemsService } from "./wishlistItems.service";
import { WishlistItemsController } from "./wishlistItems.controller";
import { WishlistItemsResolver } from "./wishlistItems.resolver";

@Module({
  imports: [WishlistItemsModuleBase, forwardRef(() => AuthModule)],
  controllers: [WishlistItemsController],
  providers: [WishlistItemsService, WishlistItemsResolver],
  exports: [WishlistItemsService],
})
export class WishlistItemsModule {}
