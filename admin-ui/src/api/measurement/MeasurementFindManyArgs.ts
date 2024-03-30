import { MeasurementWhereInput } from "./MeasurementWhereInput";
import { MeasurementOrderByInput } from "./MeasurementOrderByInput";

export type MeasurementFindManyArgs = {
  where?: MeasurementWhereInput;
  orderBy?: Array<MeasurementOrderByInput>;
  skip?: number;
  take?: number;
};
