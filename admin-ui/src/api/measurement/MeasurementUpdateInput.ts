import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";

export type MeasurementUpdateInput = {
  name?: string | null;
  sizingUnit?: SizingUnitWhereUniqueInput | null;
  value?: number | null;
};
