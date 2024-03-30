import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsUpdateManyWithoutWishlistsInput } from "./WishlistItemsUpdateManyWithoutWishlistsInput";

export type WishlistUpdateInput = {
  user?: UserWhereUniqueInput | null;
  wishlistItems?: WishlistItemsUpdateManyWithoutWishlistsInput;
};
