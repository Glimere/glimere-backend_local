import { SubSubcategory as TSubSubcategory } from "../api/subSubcategory/SubSubcategory";

export const SUBSUBCATEGORY_TITLE_FIELD = "name";

export const SubSubcategoryTitle = (record: TSubSubcategory): string => {
  return record.name?.toString() || String(record.id);
};
