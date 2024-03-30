import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type MeasurementWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sizingUnit?: SizingUnitWhereUniqueInput;
  value?: DecimalNullableFilter;
};
