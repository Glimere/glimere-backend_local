import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubSubcategoryServiceBase } from "./base/subSubcategory.service.base";

@Injectable()
export class SubSubcategoryService extends SubSubcategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
