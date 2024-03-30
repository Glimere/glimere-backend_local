import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  cartItems?: CartItemListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
