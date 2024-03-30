import { CartItemWhereUniqueInput } from "./CartItemWhereUniqueInput";
import { CartItemUpdateInput } from "./CartItemUpdateInput";

export type UpdateCartItemArgs = {
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateInput;
};
