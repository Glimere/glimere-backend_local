import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { ApparelTypeWhereUniqueInput } from "../apparelType/ApparelTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SizeWhereInput = {
  apparel?: ApparelWhereUniqueInput;
  apparelType?: ApparelTypeWhereUniqueInput;
  id?: StringFilter;
  measurements?: JsonFilter;
  user?: UserWhereUniqueInput;
};
