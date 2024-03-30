import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";

export type SubSubcategoryWhereInput = {
  apparel?: ApparelListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subCategories?: SubCategoryListRelationFilter;
};
