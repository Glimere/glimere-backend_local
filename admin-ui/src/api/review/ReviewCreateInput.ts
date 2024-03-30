import { ApparelWhereUniqueInput } from "../apparel/ApparelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  apparel?: ApparelWhereUniqueInput | null;
  comment?: string | null;
  ratingNumber?: number | null;
  reviewTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
