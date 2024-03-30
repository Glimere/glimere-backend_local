import { ApparelCreateNestedManyWithoutSubCategoriesInput } from "./ApparelCreateNestedManyWithoutSubCategoriesInput";
import { MainCategoryCreateNestedManyWithoutSubCategoriesInput } from "./MainCategoryCreateNestedManyWithoutSubCategoriesInput";
import { SubSubcategoryCreateNestedManyWithoutSubCategoriesInput } from "./SubSubcategoryCreateNestedManyWithoutSubCategoriesInput";

export type SubCategoryCreateInput = {
  apparel?: ApparelCreateNestedManyWithoutSubCategoriesInput;
  mainCategories?: MainCategoryCreateNestedManyWithoutSubCategoriesInput;
  subSubcategory?: SubSubcategoryCreateNestedManyWithoutSubCategoriesInput;
};
