import { ApparelUpdateManyWithoutCartItemsInput } from "./ApparelUpdateManyWithoutCartItemsInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";

export type CartItemUpdateInput = {
  apparelId?: number | null;
  apparels?: ApparelUpdateManyWithoutCartItemsInput;
  cart?: CartWhereUniqueInput | null;
  quantity?: number | null;
};
