import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeasurementServiceBase } from "./base/measurement.service.base";

@Injectable()
export class MeasurementService extends MeasurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
