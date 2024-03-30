import { Apparel } from "../apparel/Apparel";
import { Cart } from "../cart/Cart";

export type CartItem = {
  apparelId: number | null;
  apparels?: Array<Apparel>;
  cart?: Cart | null;
  createdAt: Date;
  id: string;
  quantity: number | null;
  updatedAt: Date;
};
