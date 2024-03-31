import { SizingUnit } from "../sizingUnit/SizingUnit";

export type Measurement = {
  createdAt: Date;
  id: string;
  name: string | null;
  sizingUnit?: SizingUnit | null;
  updatedAt: Date;
  value: number | null;
};
