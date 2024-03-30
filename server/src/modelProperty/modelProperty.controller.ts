import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModelPropertyService } from "./modelProperty.service";
import { ModelPropertyControllerBase } from "./base/modelProperty.controller.base";

@swagger.ApiTags("modelProperties")
@common.Controller("modelProperties")
export class ModelPropertyController extends ModelPropertyControllerBase {
  constructor(
    protected readonly service: ModelPropertyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
