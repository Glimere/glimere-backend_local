import { Measurement } from "../measurement/Measurement";

export type SizingUnit = {
  createdAt: Date;
  id: string;
  measurements?: Array<Measurement>;
  name: string | null;
  updatedAt: Date;
};
