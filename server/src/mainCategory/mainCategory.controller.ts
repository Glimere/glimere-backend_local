import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MainCategoryService } from "./mainCategory.service";
import { MainCategoryControllerBase } from "./base/mainCategory.controller.base";

@swagger.ApiTags("mainCategories")
@common.Controller("mainCategories")
export class MainCategoryController extends MainCategoryControllerBase {
  constructor(
    protected readonly service: MainCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
