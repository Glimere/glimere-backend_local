import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";
import { Decimal } from "decimal.js";

export type MeasurementCreateInput = {
  name?: string | null;
  sizingUnit?: SizingUnitWhereUniqueInput | null;
  value?: Decimal | null;
};
