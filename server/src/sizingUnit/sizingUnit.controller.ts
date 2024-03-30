import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SizingUnitService } from "./sizingUnit.service";
import { SizingUnitControllerBase } from "./base/sizingUnit.controller.base";

@swagger.ApiTags("sizingUnits")
@common.Controller("sizingUnits")
export class SizingUnitController extends SizingUnitControllerBase {
  constructor(
    protected readonly service: SizingUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
