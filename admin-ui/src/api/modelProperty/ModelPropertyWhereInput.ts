import { StringFilter } from "../../util/StringFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type ModelPropertyWhereInput = {
  id?: StringFilter;
  models?: ModelWhereUniqueInput;
};
