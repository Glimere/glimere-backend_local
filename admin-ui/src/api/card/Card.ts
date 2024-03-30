import { User } from "../user/User";

export type Card = {
  cardholderName: string | null;
  cardNumber: number | null;
  cardType: string | null;
  createdAt: Date;
  cvv: number | null;
  expirationMonth: string | null;
  expirationYear: string | null;
  id: string;
  isDefault: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
