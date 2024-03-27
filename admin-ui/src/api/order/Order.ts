import { Customer } from "../customer/Customer";
import { Apparel } from "../apparel/Apparel";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Apparel | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
