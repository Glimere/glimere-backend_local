import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WishlistItemsServiceBase } from "./base/wishlistItems.service.base";

@Injectable()
export class WishlistItemsService extends WishlistItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
