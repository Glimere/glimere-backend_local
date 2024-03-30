import { ApparelType as TApparelType } from "../api/apparelType/ApparelType";

export const APPARELTYPE_TITLE_FIELD = "name";

export const ApparelTypeTitle = (record: TApparelType): string => {
  return record.name?.toString() || String(record.id);
};
