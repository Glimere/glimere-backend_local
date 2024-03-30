import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingAddressServiceBase } from "./base/shippingAddress.service.base";

@Injectable()
export class ShippingAddressService extends ShippingAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
