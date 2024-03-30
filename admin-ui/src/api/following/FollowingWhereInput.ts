import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type FollowingWhereInput = {
  brand?: BrandWhereUniqueInput;
  followedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  User?: UserWhereUniqueInput;
};
