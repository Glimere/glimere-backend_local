import { MeasurementCreateNestedManyWithoutSizingUnitsInput } from "./MeasurementCreateNestedManyWithoutSizingUnitsInput";

export type SizingUnitCreateInput = {
  measurements?: MeasurementCreateNestedManyWithoutSizingUnitsInput;
  name?: string | null;
};
