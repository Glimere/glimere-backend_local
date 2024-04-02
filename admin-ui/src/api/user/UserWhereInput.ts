import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowingListRelationFilter } from "../following/FollowingListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { ShippingAddressListRelationFilter } from "../shippingAddress/ShippingAddressListRelationFilter";
import { SizeListRelationFilter } from "../size/SizeListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  cards?: CardListRelationFilter;
  carts?: CartListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  followings?: FollowingListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  shippingAddress?: ShippingAddressListRelationFilter;
  sizes?: SizeListRelationFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
