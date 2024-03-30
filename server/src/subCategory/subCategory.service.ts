import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubCategoryServiceBase } from "./base/subCategory.service.base";

@Injectable()
export class SubCategoryService extends SubCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
