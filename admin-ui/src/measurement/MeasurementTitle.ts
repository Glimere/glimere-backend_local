import { Measurement as TMeasurement } from "../api/measurement/Measurement";

export const MEASUREMENT_TITLE_FIELD = "name";

export const MeasurementTitle = (record: TMeasurement): string => {
  return record.name?.toString() || String(record.id);
};
