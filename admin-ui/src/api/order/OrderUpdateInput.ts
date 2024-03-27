import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: ApparelWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
