import { ApparelUpdateManyWithoutSubSubcategoriesInput } from "./ApparelUpdateManyWithoutSubSubcategoriesInput";
import { SubCategoryUpdateManyWithoutSubSubcategoriesInput } from "./SubCategoryUpdateManyWithoutSubSubcategoriesInput";

export type SubSubcategoryUpdateInput = {
  apparel?: ApparelUpdateManyWithoutSubSubcategoriesInput;
  name?: string | null;
  subCategories?: SubCategoryUpdateManyWithoutSubSubcategoriesInput;
};
