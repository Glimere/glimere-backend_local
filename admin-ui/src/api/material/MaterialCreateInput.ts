import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InputJsonValue } from "../../types";

export type MaterialCreateInput = {
  apparel?: ApparelWhereUniqueInput | null;
  cost?: Decimal | null;
  environmentalImpact?: InputJsonValue;
  historyAndOrigin?: string | null;
  isNatural?: boolean | null;
  materialImg?: string | null;
  materialName?: string | null;
  properties?: InputJsonValue;
  sustainabilityPractices?: string | null;
};
