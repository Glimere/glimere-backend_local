import { Size as TSize } from "../api/size/Size";

export const SIZE_TITLE_FIELD = "id";

export const SizeTitle = (record: TSize): string => {
  return record.id?.toString() || String(record.id);
};
