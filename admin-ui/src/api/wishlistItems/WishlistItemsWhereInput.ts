import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type WishlistItemsWhereInput = {
  apparels?: ApparelListRelationFilter;
  id?: StringFilter;
  wishlist?: WishlistWhereUniqueInput;
};
