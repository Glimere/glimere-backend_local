import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MainCategoryServiceBase } from "./base/mainCategory.service.base";

@Injectable()
export class MainCategoryService extends MainCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
