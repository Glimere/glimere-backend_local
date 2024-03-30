import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShippingAddressService } from "./shippingAddress.service";
import { ShippingAddressControllerBase } from "./base/shippingAddress.controller.base";

@swagger.ApiTags("shippingAddresses")
@common.Controller("shippingAddresses")
export class ShippingAddressController extends ShippingAddressControllerBase {
  constructor(
    protected readonly service: ShippingAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
