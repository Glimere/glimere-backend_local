import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CartItemWhereInput = {
  apparelId?: IntNullableFilter;
  apparels?: ApparelListRelationFilter;
  cart?: CartWhereUniqueInput;
  id?: StringFilter;
  quantity?: IntNullableFilter;
};
