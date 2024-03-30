import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShippingAddressModuleBase } from "./base/shippingAddress.module.base";
import { ShippingAddressService } from "./shippingAddress.service";
import { ShippingAddressController } from "./shippingAddress.controller";
import { ShippingAddressResolver } from "./shippingAddress.resolver";

@Module({
  imports: [ShippingAddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShippingAddressController],
  providers: [ShippingAddressService, ShippingAddressResolver],
  exports: [ShippingAddressService],
})
export class ShippingAddressModule {}
