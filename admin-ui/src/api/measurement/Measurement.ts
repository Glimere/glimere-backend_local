import { SizingUnit } from "../sizingUnit/SizingUnit";
import { Decimal } from "decimal.js";

export type Measurement = {
  createdAt: Date;
  id: string;
  name: string | null;
  sizingUnit?: SizingUnit | null;
  updatedAt: Date;
  value: Decimal | null;
};
