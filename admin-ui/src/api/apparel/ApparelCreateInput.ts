import { OrderCreateNestedManyWithoutApparelsInput } from "./OrderCreateNestedManyWithoutApparelsInput";

export type ApparelCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutApparelsInput;
};
