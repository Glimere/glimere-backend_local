import { SortOrder } from "../../util/SortOrder";

export type ShippingAddressOrderByInput = {
  addressName?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  houseNo?: SortOrder;
  id?: SortOrder;
  nerarestBusstop?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
