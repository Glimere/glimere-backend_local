import { OrderUpdateManyWithoutApparelsInput } from "./OrderUpdateManyWithoutApparelsInput";

export type ApparelUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutApparelsInput;
};
