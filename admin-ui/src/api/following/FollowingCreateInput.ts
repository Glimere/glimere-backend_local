import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type FollowingCreateInput = {
  brand?: BrandWhereUniqueInput | null;
  followedAt?: Date | null;
  User?: UserWhereUniqueInput | null;
};
