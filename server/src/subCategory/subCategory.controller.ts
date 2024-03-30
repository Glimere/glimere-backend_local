import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubCategoryService } from "./subCategory.service";
import { SubCategoryControllerBase } from "./base/subCategory.controller.base";

@swagger.ApiTags("subCategories")
@common.Controller("subCategories")
export class SubCategoryController extends SubCategoryControllerBase {
  constructor(
    protected readonly service: SubCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
