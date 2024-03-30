import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MainCategoryModuleBase } from "./base/mainCategory.module.base";
import { MainCategoryService } from "./mainCategory.service";
import { MainCategoryController } from "./mainCategory.controller";
import { MainCategoryResolver } from "./mainCategory.resolver";

@Module({
  imports: [MainCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [MainCategoryController],
  providers: [MainCategoryService, MainCategoryResolver],
  exports: [MainCategoryService],
})
export class MainCategoryModule {}
