import { SizingUnit as TSizingUnit } from "../api/sizingUnit/SizingUnit";

export const SIZINGUNIT_TITLE_FIELD = "name";

export const SizingUnitTitle = (record: TSizingUnit): string => {
  return record.name?.toString() || String(record.id);
};
