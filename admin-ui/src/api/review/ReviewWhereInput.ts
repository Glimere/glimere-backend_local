import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  apparel?: ApparelWhereUniqueInput;
  comment?: StringNullableFilter;
  id?: StringFilter;
  ratingNumber?: IntNullableFilter;
  reviewTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
