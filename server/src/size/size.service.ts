import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SizeServiceBase } from "./base/size.service.base";

@Injectable()
export class SizeService extends SizeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
