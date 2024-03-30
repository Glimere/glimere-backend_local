import { ApparelUpdateManyWithoutBrandsInput } from "./ApparelUpdateManyWithoutBrandsInput";
import { FollowingUpdateManyWithoutBrandsInput } from "./FollowingUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  apparels?: ApparelUpdateManyWithoutBrandsInput;
  color?: string | null;
  country?: string | null;
  desc?: string | null;
  followings?: FollowingUpdateManyWithoutBrandsInput;
  foundingdate?: Date | null;
  logo?: string | null;
  name?: string | null;
  shortName?: string | null;
  state?: string | null;
  website?: string | null;
};
