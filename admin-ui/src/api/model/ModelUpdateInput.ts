import { ApparelUpdateManyWithoutModelsInput } from "./ApparelUpdateManyWithoutModelsInput";
import { ModelPropertyWhereUniqueInput } from "../modelProperty/ModelPropertyWhereUniqueInput";

export type ModelUpdateInput = {
  apparels?: ApparelUpdateManyWithoutModelsInput;
  modelFile?: string | null;
  modelProperties?: ModelPropertyWhereUniqueInput | null;
};
