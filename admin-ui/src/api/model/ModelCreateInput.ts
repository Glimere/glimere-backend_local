import { ApparelCreateNestedManyWithoutModelsInput } from "./ApparelCreateNestedManyWithoutModelsInput";
import { ModelPropertyWhereUniqueInput } from "../modelProperty/ModelPropertyWhereUniqueInput";

export type ModelCreateInput = {
  apparels?: ApparelCreateNestedManyWithoutModelsInput;
  modelFile?: string | null;
  modelProperties?: ModelPropertyWhereUniqueInput | null;
};
