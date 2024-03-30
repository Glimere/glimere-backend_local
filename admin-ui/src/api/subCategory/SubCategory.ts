import { Apparel } from "../apparel/Apparel";
import { MainCategory } from "../mainCategory/MainCategory";
import { SubSubcategory } from "../subSubcategory/SubSubcategory";

export type SubCategory = {
  apparel?: Array<Apparel>;
  createdAt: Date;
  id: string;
  mainCategories?: Array<MainCategory>;
  subSubcategory?: Array<SubSubcategory>;
  updatedAt: Date;
};
