import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MaterialWhereInput = {
  apparel?: ApparelWhereUniqueInput;
  cost?: DecimalNullableFilter;
  environmentalImpact?: JsonFilter;
  historyAndOrigin?: StringNullableFilter;
  id?: StringFilter;
  isNatural?: BooleanNullableFilter;
  materialImg?: StringNullableFilter;
  materialName?: StringNullableFilter;
  properties?: JsonFilter;
  sustainabilityPractices?: StringNullableFilter;
};
