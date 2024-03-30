import { SubCategory as TSubCategory } from "../api/subCategory/SubCategory";

export const SUBCATEGORY_TITLE_FIELD = "id";

export const SubCategoryTitle = (record: TSubCategory): string => {
  return record.id?.toString() || String(record.id);
};
