import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeasurementModuleBase } from "./base/measurement.module.base";
import { MeasurementService } from "./measurement.service";
import { MeasurementController } from "./measurement.controller";
import { MeasurementResolver } from "./measurement.resolver";

@Module({
  imports: [MeasurementModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeasurementController],
  providers: [MeasurementService, MeasurementResolver],
  exports: [MeasurementService],
})
export class MeasurementModule {}
