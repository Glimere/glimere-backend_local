import { Model as TModel } from "../api/model/Model";

export const MODEL_TITLE_FIELD = "modelFile";

export const ModelTitle = (record: TModel): string => {
  return record.modelFile?.toString() || String(record.id);
};
