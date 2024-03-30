import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaterialModuleBase } from "./base/material.module.base";
import { MaterialService } from "./material.service";
import { MaterialController } from "./material.controller";
import { MaterialResolver } from "./material.resolver";

@Module({
  imports: [MaterialModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaterialController],
  providers: [MaterialService, MaterialResolver],
  exports: [MaterialService],
})
export class MaterialModule {}
