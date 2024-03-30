import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MainCategoryListRelationFilter } from "../mainCategory/MainCategoryListRelationFilter";
import { SubSubcategoryListRelationFilter } from "../subSubcategory/SubSubcategoryListRelationFilter";

export type SubCategoryWhereInput = {
  apparel?: ApparelListRelationFilter;
  id?: StringFilter;
  mainCategories?: MainCategoryListRelationFilter;
  subSubcategory?: SubSubcategoryListRelationFilter;
};
