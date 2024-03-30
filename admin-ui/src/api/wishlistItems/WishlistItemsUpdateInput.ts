import { ApparelUpdateManyWithoutWishlistItemsItemsInput } from "./ApparelUpdateManyWithoutWishlistItemsItemsInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type WishlistItemsUpdateInput = {
  apparels?: ApparelUpdateManyWithoutWishlistItemsItemsInput;
  wishlist?: WishlistWhereUniqueInput | null;
};
