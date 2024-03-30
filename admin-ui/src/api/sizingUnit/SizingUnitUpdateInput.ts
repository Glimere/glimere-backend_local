import { MeasurementUpdateManyWithoutSizingUnitsInput } from "./MeasurementUpdateManyWithoutSizingUnitsInput";

export type SizingUnitUpdateInput = {
  measurements?: MeasurementUpdateManyWithoutSizingUnitsInput;
  name?: string | null;
};
