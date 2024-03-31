import { Apparel } from "../apparel/Apparel";
import { JsonValue } from "type-fest";

export type Material = {
  apparel?: Apparel | null;
  cost: number | null;
  createdAt: Date;
  environmentalImpact: JsonValue;
  historyAndOrigin: string | null;
  id: string;
  isNatural: boolean | null;
  materialImg: string | null;
  materialName: string | null;
  properties: JsonValue;
  sustainabilityPractices: string | null;
  updatedAt: Date;
};
