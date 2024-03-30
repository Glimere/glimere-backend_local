import { ApparelCreateNestedManyWithoutCartItemsInput } from "./ApparelCreateNestedManyWithoutCartItemsInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type CartItemCreateInput = {
  apparelId?: number | null;
  apparels?: ApparelCreateNestedManyWithoutCartItemsInput;
  cart?: CartWhereUniqueInput | null;
  quantity?: number | null;
};
