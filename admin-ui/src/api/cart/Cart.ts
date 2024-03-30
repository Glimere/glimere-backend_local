import { CartItem } from "../cartItem/CartItem";
import { User } from "../user/User";

export type Cart = {
  cartItems?: Array<CartItem>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
