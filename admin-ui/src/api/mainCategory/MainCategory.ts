import { Apparel } from "../apparel/Apparel";
import { SubCategory } from "../subCategory/SubCategory";

export type MainCategory = {
  apparels?: Array<Apparel>;
  cover: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  pluralName: string | null;
  subCategory?: Array<SubCategory>;
  updatedAt: Date;
};
