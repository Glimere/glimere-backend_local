import { Apparel } from "../apparel/Apparel";
import { Following } from "../following/Following";

export type Brand = {
  apparels?: Array<Apparel>;
  color: string | null;
  country: string | null;
  createdAt: Date;
  desc: string | null;
  followings?: Array<Following>;
  foundingdate: Date | null;
  id: string;
  logo: string | null;
  name: string | null;
  shortName: string | null;
  state: string | null;
  updatedAt: Date;
  website: string | null;
};
