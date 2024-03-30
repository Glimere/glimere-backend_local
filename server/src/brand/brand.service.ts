import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BrandServiceBase } from "./base/brand.service.base";

@Injectable()
export class BrandService extends BrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
