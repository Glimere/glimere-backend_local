import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardWhereInput = {
  cardholderName?: StringNullableFilter;
  cardNumber?: IntNullableFilter;
  cardType?: StringNullableFilter;
  cvv?: IntNullableFilter;
  expirationMonth?: StringNullableFilter;
  expirationYear?: StringNullableFilter;
  id?: StringFilter;
  isDefault?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
