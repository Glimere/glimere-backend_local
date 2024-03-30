import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubSubcategoryModuleBase } from "./base/subSubcategory.module.base";
import { SubSubcategoryService } from "./subSubcategory.service";
import { SubSubcategoryController } from "./subSubcategory.controller";
import { SubSubcategoryResolver } from "./subSubcategory.resolver";

@Module({
  imports: [SubSubcategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubSubcategoryController],
  providers: [SubSubcategoryService, SubSubcategoryResolver],
  exports: [SubSubcategoryService],
})
export class SubSubcategoryModule {}
