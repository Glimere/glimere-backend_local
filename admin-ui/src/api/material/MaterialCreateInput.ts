import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MaterialCreateInput = {
  apparel?: ApparelWhereUniqueInput | null;
  cost?: number | null;
  environmentalImpact?: InputJsonValue;
  historyAndOrigin?: string | null;
  isNatural?: boolean | null;
  materialImg?: string | null;
  materialName?: string | null;
  properties?: InputJsonValue;
  sustainabilityPractices?: string | null;
};
