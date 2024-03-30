import { User } from "../user/User";
import { WishlistItems } from "../wishlistItems/WishlistItems";

export type Wishlist = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  wishlistItems?: Array<WishlistItems>;
};
