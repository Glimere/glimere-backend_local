import { Apparel } from "../apparel/Apparel";
import { SubCategory } from "../subCategory/SubCategory";

export type SubSubcategory = {
  apparel?: Array<Apparel>;
  createdAt: Date;
  id: string;
  name: string | null;
  subCategories?: Array<SubCategory>;
  updatedAt: Date;
};
