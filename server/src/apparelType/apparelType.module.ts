import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApparelTypeModuleBase } from "./base/apparelType.module.base";
import { ApparelTypeService } from "./apparelType.service";
import { ApparelTypeController } from "./apparelType.controller";
import { ApparelTypeResolver } from "./apparelType.resolver";

@Module({
  imports: [ApparelTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApparelTypeController],
  providers: [ApparelTypeService, ApparelTypeResolver],
  exports: [ApparelTypeService],
})
export class ApparelTypeModule {}
