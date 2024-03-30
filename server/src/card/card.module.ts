import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CardModuleBase } from "./base/card.module.base";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";
import { CardResolver } from "./card.resolver";

@Module({
  imports: [CardModuleBase, forwardRef(() => AuthModule)],
  controllers: [CardController],
  providers: [CardService, CardResolver],
  exports: [CardService],
})
export class CardModule {}
