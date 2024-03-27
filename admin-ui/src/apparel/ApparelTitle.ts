import { Apparel as TApparel } from "../api/apparel/Apparel";

export const APPAREL_TITLE_FIELD = "name";

export const ApparelTitle = (record: TApparel): string => {
  return record.name?.toString() || String(record.id);
};
