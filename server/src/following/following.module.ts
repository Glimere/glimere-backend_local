import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FollowingModuleBase } from "./base/following.module.base";
import { FollowingService } from "./following.service";
import { FollowingController } from "./following.controller";
import { FollowingResolver } from "./following.resolver";

@Module({
  imports: [FollowingModuleBase, forwardRef(() => AuthModule)],
  controllers: [FollowingController],
  providers: [FollowingService, FollowingResolver],
  exports: [FollowingService],
})
export class FollowingModule {}
