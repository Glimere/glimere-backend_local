import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubSubcategoryService } from "./subSubcategory.service";
import { SubSubcategoryControllerBase } from "./base/subSubcategory.controller.base";

@swagger.ApiTags("subSubcategories")
@common.Controller("subSubcategories")
export class SubSubcategoryController extends SubSubcategoryControllerBase {
  constructor(
    protected readonly service: SubSubcategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
