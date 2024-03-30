import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ModelPropertyWhereUniqueInput } from "../modelProperty/ModelPropertyWhereUniqueInput";

export type ModelWhereInput = {
  apparels?: ApparelListRelationFilter;
  id?: StringFilter;
  modelFile?: StringNullableFilter;
  modelProperties?: ModelPropertyWhereUniqueInput;
};
