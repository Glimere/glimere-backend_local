import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModelPropertyServiceBase } from "./base/modelProperty.service.base";

@Injectable()
export class ModelPropertyService extends ModelPropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
