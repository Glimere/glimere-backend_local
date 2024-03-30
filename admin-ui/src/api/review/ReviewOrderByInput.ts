import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  apparelId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ratingNumber?: SortOrder;
  reviewTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
