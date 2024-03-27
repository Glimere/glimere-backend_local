import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApparelModuleBase } from "./base/apparel.module.base";
import { ApparelService } from "./apparel.service";
import { ApparelController } from "./apparel.controller";
import { ApparelResolver } from "./apparel.resolver";

@Module({
  imports: [ApparelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApparelController],
  providers: [ApparelService, ApparelResolver],
  exports: [ApparelService],
})
export class ApparelModule {}
