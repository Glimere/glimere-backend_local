import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsListRelationFilter } from "../wishlistItems/WishlistItemsListRelationFilter";

export type WishlistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  wishlistItems?: WishlistItemsListRelationFilter;
};
