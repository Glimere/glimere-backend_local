import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SizeModuleBase } from "./base/size.module.base";
import { SizeService } from "./size.service";
import { SizeController } from "./size.controller";
import { SizeResolver } from "./size.resolver";

@Module({
  imports: [SizeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SizeController],
  providers: [SizeService, SizeResolver],
  exports: [SizeService],
})
export class SizeModule {}
