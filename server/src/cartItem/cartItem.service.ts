import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CartItemServiceBase } from "./base/cartItem.service.base";

@Injectable()
export class CartItemService extends CartItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
