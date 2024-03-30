import { SortOrder } from "../../util/SortOrder";

export type WishlistItemsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  wishlistId?: SortOrder;
};
