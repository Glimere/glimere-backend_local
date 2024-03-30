import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsCreateNestedManyWithoutWishlistsInput } from "./WishlistItemsCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  user?: UserWhereUniqueInput | null;
  wishlistItems?: WishlistItemsCreateNestedManyWithoutWishlistsInput;
};
