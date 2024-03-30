import { Apparel } from "../apparel/Apparel";
import { ApparelType } from "../apparelType/ApparelType";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Size = {
  apparel?: Apparel | null;
  apparelType?: ApparelType | null;
  createdAt: Date;
  id: string;
  measurements: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
