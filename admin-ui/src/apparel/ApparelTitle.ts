import { Apparel as TApparel } from "../api/apparel/Apparel";

export const APPAREL_TITLE_FIELD = "apparelName";

export const ApparelTitle = (record: TApparel): string => {
  return record.apparelName?.toString() || String(record.id);
};
