import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FollowingService } from "./following.service";
import { FollowingControllerBase } from "./base/following.controller.base";

@swagger.ApiTags("followings")
@common.Controller("followings")
export class FollowingController extends FollowingControllerBase {
  constructor(
    protected readonly service: FollowingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
