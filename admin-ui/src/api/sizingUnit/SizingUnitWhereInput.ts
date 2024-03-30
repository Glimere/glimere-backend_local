import { StringFilter } from "../../util/StringFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SizingUnitWhereInput = {
  id?: StringFilter;
  measurements?: MeasurementListRelationFilter;
  name?: StringNullableFilter;
};
