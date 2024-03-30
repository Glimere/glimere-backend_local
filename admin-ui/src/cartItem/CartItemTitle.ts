import { CartItem as TCartItem } from "../api/cartItem/CartItem";

export const CARTITEM_TITLE_FIELD = "id";

export const CartItemTitle = (record: TCartItem): string => {
  return record.id?.toString() || String(record.id);
};
