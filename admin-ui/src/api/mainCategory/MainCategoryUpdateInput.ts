import { ApparelUpdateManyWithoutMainCategoriesInput } from "./ApparelUpdateManyWithoutMainCategoriesInput";
import { SubCategoryUpdateManyWithoutMainCategoriesInput } from "./SubCategoryUpdateManyWithoutMainCategoriesInput";

export type MainCategoryUpdateInput = {
  apparels?: ApparelUpdateManyWithoutMainCategoriesInput;
  cover?: string | null;
  name?: string | null;
  pluralName?: string | null;
  subCategory?: SubCategoryUpdateManyWithoutMainCategoriesInput;
};
