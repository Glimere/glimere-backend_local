import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SizingUnitServiceBase } from "./base/sizingUnit.service.base";

@Injectable()
export class SizingUnitService extends SizingUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
