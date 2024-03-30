import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  cardholderName?: SortOrder;
  cardNumber?: SortOrder;
  cardType?: SortOrder;
  createdAt?: SortOrder;
  cvv?: SortOrder;
  expirationMonth?: SortOrder;
  expirationYear?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
