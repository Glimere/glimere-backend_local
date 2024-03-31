import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SizingUnitWhereUniqueInput } from "../sizingUnit/SizingUnitWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MeasurementWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sizingUnit?: SizingUnitWhereUniqueInput;
  value?: IntNullableFilter;
};
