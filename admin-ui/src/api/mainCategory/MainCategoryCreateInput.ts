import { ApparelCreateNestedManyWithoutMainCategoriesInput } from "./ApparelCreateNestedManyWithoutMainCategoriesInput";
import { SubCategoryCreateNestedManyWithoutMainCategoriesInput } from "./SubCategoryCreateNestedManyWithoutMainCategoriesInput";

export type MainCategoryCreateInput = {
  apparels?: ApparelCreateNestedManyWithoutMainCategoriesInput;
  cover?: string | null;
  name?: string | null;
  pluralName?: string | null;
  subCategory?: SubCategoryCreateNestedManyWithoutMainCategoriesInput;
};
