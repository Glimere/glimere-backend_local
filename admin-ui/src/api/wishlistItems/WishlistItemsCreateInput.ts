import { ApparelCreateNestedManyWithoutWishlistItemsItemsInput } from "./ApparelCreateNestedManyWithoutWishlistItemsItemsInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type WishlistItemsCreateInput = {
  apparels?: ApparelCreateNestedManyWithoutWishlistItemsItemsInput;
  wishlist?: WishlistWhereUniqueInput | null;
};
