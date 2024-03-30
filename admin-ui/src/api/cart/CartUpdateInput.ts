import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  cartItems?: CartItemUpdateManyWithoutCartsInput;
  user?: UserWhereUniqueInput | null;
};
