import { Model } from "../model/Model";

export type ModelProperty = {
  createdAt: Date;
  id: string;
  models?: Model | null;
  updatedAt: Date;
};
