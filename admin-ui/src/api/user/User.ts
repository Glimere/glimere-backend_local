import { Card } from "../card/Card";
import { Cart } from "../cart/Cart";
import { Following } from "../following/Following";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";
import { ShippingAddress } from "../shippingAddress/ShippingAddress";
import { Size } from "../size/Size";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  cards?: Array<Card>;
  carts?: Array<Cart>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  followings?: Array<Following>;
  id: string;
  lastName: string | null;
  reviews?: Array<Review>;
  roles: JsonValue;
  shippingAddress?: Array<ShippingAddress>;
  sizes?: Array<Size>;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
