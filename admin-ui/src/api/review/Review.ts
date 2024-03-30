import { Apparel } from "../apparel/Apparel";
import { User } from "../user/User";

export type Review = {
  apparel?: Apparel | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  ratingNumber: number | null;
  reviewTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
