import { SortOrder } from "../../util/SortOrder";

export type CartItemOrderByInput = {
  apparelId?: SortOrder;
  cartId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
