import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";

export type MeasurementCreateInput = {
  name?: string | null;
  sizingUnit?: SizingUnitWhereUniqueInput | null;
  value?: number | null;
};
