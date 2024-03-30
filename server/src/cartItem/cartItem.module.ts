import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CartItemModuleBase } from "./base/cartItem.module.base";
import { CartItemService } from "./cartItem.service";
import { CartItemController } from "./cartItem.controller";
import { CartItemResolver } from "./cartItem.resolver";

@Module({
  imports: [CartItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [CartItemController],
  providers: [CartItemService, CartItemResolver],
  exports: [CartItemService],
})
export class CartItemModule {}
