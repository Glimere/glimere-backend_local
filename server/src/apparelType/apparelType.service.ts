import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApparelTypeServiceBase } from "./base/apparelType.service.base";

@Injectable()
export class ApparelTypeService extends ApparelTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
