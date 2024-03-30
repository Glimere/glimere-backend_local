import { WishlistItemsWhereInput } from "./WishlistItemsWhereInput";
import { WishlistItemsOrderByInput } from "./WishlistItemsOrderByInput";

export type WishlistItemsFindManyArgs = {
  where?: WishlistItemsWhereInput;
  orderBy?: Array<WishlistItemsOrderByInput>;
  skip?: number;
  take?: number;
};
