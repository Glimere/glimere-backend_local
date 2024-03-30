import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowingServiceBase } from "./base/following.service.base";

@Injectable()
export class FollowingService extends FollowingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
