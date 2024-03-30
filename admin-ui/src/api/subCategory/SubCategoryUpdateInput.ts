import { ApparelUpdateManyWithoutSubCategoriesInput } from "./ApparelUpdateManyWithoutSubCategoriesInput";
import { MainCategoryUpdateManyWithoutSubCategoriesInput } from "./MainCategoryUpdateManyWithoutSubCategoriesInput";
import { SubSubcategoryUpdateManyWithoutSubCategoriesInput } from "./SubSubcategoryUpdateManyWithoutSubCategoriesInput";

export type SubCategoryUpdateInput = {
  apparel?: ApparelUpdateManyWithoutSubCategoriesInput;
  mainCategories?: MainCategoryUpdateManyWithoutSubCategoriesInput;
  subSubcategory?: SubSubcategoryUpdateManyWithoutSubCategoriesInput;
};
