import { Brand } from "../brand/Brand";
import { User } from "../user/User";

export type Following = {
  brand?: Brand | null;
  createdAt: Date;
  followedAt: Date | null;
  id: string;
  updatedAt: Date;
  User?: User | null;
};
