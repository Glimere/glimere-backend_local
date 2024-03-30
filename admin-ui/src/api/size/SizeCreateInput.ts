import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { ApparelTypeWhereUniqueInput } from "../apparelType/ApparelTypeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SizeCreateInput = {
  apparel?: ApparelWhereUniqueInput | null;
  apparelType?: ApparelTypeWhereUniqueInput | null;
  measurements?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
