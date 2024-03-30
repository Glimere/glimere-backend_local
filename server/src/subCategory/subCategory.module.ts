import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubCategoryModuleBase } from "./base/subCategory.module.base";
import { SubCategoryService } from "./subCategory.service";
import { SubCategoryController } from "./subCategory.controller";
import { SubCategoryResolver } from "./subCategory.resolver";

@Module({
  imports: [SubCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubCategoryController],
  providers: [SubCategoryService, SubCategoryResolver],
  exports: [SubCategoryService],
})
export class SubCategoryModule {}
