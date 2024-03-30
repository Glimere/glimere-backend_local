import { Material as TMaterial } from "../api/material/Material";

export const MATERIAL_TITLE_FIELD = "materialName";

export const MaterialTitle = (record: TMaterial): string => {
  return record.materialName?.toString() || String(record.id);
};
