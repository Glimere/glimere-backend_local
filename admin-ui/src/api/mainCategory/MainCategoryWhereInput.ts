import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";

export type MainCategoryWhereInput = {
  apparels?: ApparelListRelationFilter;
  cover?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pluralName?: StringNullableFilter;
  subCategory?: SubCategoryListRelationFilter;
};
