import { ApparelUpdateManyWithoutApparelTypesInput } from "./ApparelUpdateManyWithoutApparelTypesInput";
import { SizeUpdateManyWithoutApparelTypesInput } from "./SizeUpdateManyWithoutApparelTypesInput";

export type ApparelTypeUpdateInput = {
  apparels?: ApparelUpdateManyWithoutApparelTypesInput;
  name?: string | null;
  sizes?: SizeUpdateManyWithoutApparelTypesInput;
};
