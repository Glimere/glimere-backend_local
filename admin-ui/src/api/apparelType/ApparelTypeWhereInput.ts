import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SizeListRelationFilter } from "../size/SizeListRelationFilter";

export type ApparelTypeWhereInput = {
  apparels?: ApparelListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sizes?: SizeListRelationFilter;
};
