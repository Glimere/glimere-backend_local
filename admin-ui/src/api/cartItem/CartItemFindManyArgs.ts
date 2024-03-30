import { CartItemWhereInput } from "./CartItemWhereInput";
import { CartItemOrderByInput } from "./CartItemOrderByInput";

export type CartItemFindManyArgs = {
  where?: CartItemWhereInput;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: number;
  take?: number;
};
