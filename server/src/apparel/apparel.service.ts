import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApparelServiceBase } from "./base/apparel.service.base";

@Injectable()
export class ApparelService extends ApparelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
