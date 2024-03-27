import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApparelService } from "./apparel.service";
import { ApparelControllerBase } from "./base/apparel.controller.base";

@swagger.ApiTags("apparels")
@common.Controller("apparels")
export class ApparelController extends ApparelControllerBase {
  constructor(
    protected readonly service: ApparelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
