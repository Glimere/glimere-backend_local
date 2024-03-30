import { ApparelCreateNestedManyWithoutBrandsInput } from "./ApparelCreateNestedManyWithoutBrandsInput";
import { FollowingCreateNestedManyWithoutBrandsInput } from "./FollowingCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  apparels?: ApparelCreateNestedManyWithoutBrandsInput;
  color?: string | null;
  country?: string | null;
  desc?: string | null;
  followings?: FollowingCreateNestedManyWithoutBrandsInput;
  foundingdate?: Date | null;
  logo?: string | null;
  name?: string | null;
  shortName?: string | null;
  state?: string | null;
  website?: string | null;
};
