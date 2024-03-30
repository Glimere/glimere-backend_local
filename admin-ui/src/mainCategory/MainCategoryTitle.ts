import { MainCategory as TMainCategory } from "../api/mainCategory/MainCategory";

export const MAINCATEGORY_TITLE_FIELD = "name";

export const MainCategoryTitle = (record: TMainCategory): string => {
  return record.name?.toString() || String(record.id);
};
