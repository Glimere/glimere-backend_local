import { User } from "../user/User";

export type ShippingAddress = {
  addressName: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  houseNo: string | null;
  id: string;
  nerarestBusstop: string | null;
  postalCode: number | null;
  state: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
