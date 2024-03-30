import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ModelPropertyModuleBase } from "./base/modelProperty.module.base";
import { ModelPropertyService } from "./modelProperty.service";
import { ModelPropertyController } from "./modelProperty.controller";
import { ModelPropertyResolver } from "./modelProperty.resolver";

@Module({
  imports: [ModelPropertyModuleBase, forwardRef(() => AuthModule)],
  controllers: [ModelPropertyController],
  providers: [ModelPropertyService, ModelPropertyResolver],
  exports: [ModelPropertyService],
})
export class ModelPropertyModule {}
