import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SizingUnitModuleBase } from "./base/sizingUnit.module.base";
import { SizingUnitService } from "./sizingUnit.service";
import { SizingUnitController } from "./sizingUnit.controller";
import { SizingUnitResolver } from "./sizingUnit.resolver";

@Module({
  imports: [SizingUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [SizingUnitController],
  providers: [SizingUnitService, SizingUnitResolver],
  exports: [SizingUnitService],
})
export class SizingUnitModule {}
