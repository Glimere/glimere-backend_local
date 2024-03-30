import { Apparel } from "../apparel/Apparel";
import { ModelProperty } from "../modelProperty/ModelProperty";

export type Model = {
  apparels?: Array<Apparel>;
  createdAt: Date;
  id: string;
  modelFile: string | null;
  modelProperties?: ModelProperty | null;
  updatedAt: Date;
};
