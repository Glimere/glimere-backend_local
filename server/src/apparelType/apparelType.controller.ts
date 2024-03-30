import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApparelTypeService } from "./apparelType.service";
import { ApparelTypeControllerBase } from "./base/apparelType.controller.base";

@swagger.ApiTags("apparelTypes")
@common.Controller("apparelTypes")
export class ApparelTypeController extends ApparelTypeControllerBase {
  constructor(
    protected readonly service: ApparelTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
