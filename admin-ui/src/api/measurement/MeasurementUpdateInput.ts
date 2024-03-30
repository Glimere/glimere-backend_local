import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";
import { Decimal } from "decimal.js";

export type MeasurementUpdateInput = {
  name?: string | null;
  sizingUnit?: SizingUnitWhereUniqueInput | null;
  value?: Decimal | null;
};
