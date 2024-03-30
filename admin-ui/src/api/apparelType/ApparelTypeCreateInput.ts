import { ApparelCreateNestedManyWithoutApparelTypesInput } from "./ApparelCreateNestedManyWithoutApparelTypesInput";
import { SizeCreateNestedManyWithoutApparelTypesInput } from "./SizeCreateNestedManyWithoutApparelTypesInput";

export type ApparelTypeCreateInput = {
  apparels?: ApparelCreateNestedManyWithoutApparelTypesInput;
  name?: string | null;
  sizes?: SizeCreateNestedManyWithoutApparelTypesInput;
};
