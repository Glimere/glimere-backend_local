import { Apparel } from "../apparel/Apparel";
import { Size } from "../size/Size";

export type ApparelType = {
  apparels?: Array<Apparel>;
  createdAt: Date;
  id: string;
  name: string | null;
  sizes?: Array<Size>;
  updatedAt: Date;
};
