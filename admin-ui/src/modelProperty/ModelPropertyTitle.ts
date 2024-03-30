import { ModelProperty as TModelProperty } from "../api/modelProperty/ModelProperty";

export const MODELPROPERTY_TITLE_FIELD = "id";

export const ModelPropertyTitle = (record: TModelProperty): string => {
  return record.id?.toString() || String(record.id);
};
