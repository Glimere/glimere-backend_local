import { ApparelCreateNestedManyWithoutSubSubcategoriesInput } from "./ApparelCreateNestedManyWithoutSubSubcategoriesInput";
import { SubCategoryCreateNestedManyWithoutSubSubcategoriesInput } from "./SubCategoryCreateNestedManyWithoutSubSubcategoriesInput";

export type SubSubcategoryCreateInput = {
  apparel?: ApparelCreateNestedManyWithoutSubSubcategoriesInput;
  name?: string | null;
  subCategories?: SubCategoryCreateNestedManyWithoutSubSubcategoriesInput;
};
