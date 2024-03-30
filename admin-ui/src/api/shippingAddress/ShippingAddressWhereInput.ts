import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ShippingAddressWhereInput = {
  addressName?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  houseNo?: StringNullableFilter;
  id?: StringFilter;
  nerarestBusstop?: StringNullableFilter;
  postalCode?: IntNullableFilter;
  state?: StringNullableFilter;
  users?: UserListRelationFilter;
};
