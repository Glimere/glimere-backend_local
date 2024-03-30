import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardUpdateInput = {
  cardholderName?: string | null;
  cardNumber?: number | null;
  cardType?: string | null;
  cvv?: number | null;
  expirationMonth?: string | null;
  expirationYear?: string | null;
  isDefault?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
