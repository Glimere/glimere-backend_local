import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  apparelId?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  environmentalImpact?: SortOrder;
  historyAndOrigin?: SortOrder;
  id?: SortOrder;
  isNatural?: SortOrder;
  materialImg?: SortOrder;
  materialName?: SortOrder;
  properties?: SortOrder;
  sustainabilityPractices?: SortOrder;
  updatedAt?: SortOrder;
};
