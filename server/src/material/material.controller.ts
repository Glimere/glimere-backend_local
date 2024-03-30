import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaterialService } from "./material.service";
import { MaterialControllerBase } from "./base/material.controller.base";

@swagger.ApiTags("materials")
@common.Controller("materials")
export class MaterialController extends MaterialControllerBase {
  constructor(
    protected readonly service: MaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
