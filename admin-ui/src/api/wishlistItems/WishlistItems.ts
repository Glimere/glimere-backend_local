import { Apparel } from "../apparel/Apparel";
import { Wishlist } from "../wishlist/Wishlist";

export type WishlistItems = {
  apparels?: Array<Apparel>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  wishlist?: Wishlist | null;
};
