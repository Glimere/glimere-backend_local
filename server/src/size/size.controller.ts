import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SizeService } from "./size.service";
import { SizeControllerBase } from "./base/size.controller.base";

@swagger.ApiTags("sizes")
@common.Controller("sizes")
export class SizeController extends SizeControllerBase {
  constructor(
    protected readonly service: SizeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
