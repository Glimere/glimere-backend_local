import { CartItemWhereInput } from "./CartItemWhereInput";

export type CartItemListRelationFilter = {
  every?: CartItemWhereInput;
  some?: CartItemWhereInput;
  none?: CartItemWhereInput;
};
