import { SortOrder } from "../../util/SortOrder";

export type ApparelOrderByInput = {
  apparelDesc?: SortOrder;
  apparelName?: SortOrder;
  apparelPrice?: SortOrder;
  apparelTypeId?: SortOrder;
  brandId?: SortOrder;
  cartItemId?: SortOrder;
  createdAt?: SortOrder;
  discountedPrice?: SortOrder;
  discountEndDate?: SortOrder;
  discountPercentage?: SortOrder;
  discountStartDate?: SortOrder;
  id?: SortOrder;
  isDiscounted?: SortOrder;
  mainCategoryId?: SortOrder;
  updatedAt?: SortOrder;
  wishlistItemsId?: SortOrder;
};
