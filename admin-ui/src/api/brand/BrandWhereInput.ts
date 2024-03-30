import { ApparelListRelationFilter } from "../apparel/ApparelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowingListRelationFilter } from "../following/FollowingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BrandWhereInput = {
  apparels?: ApparelListRelationFilter;
  color?: StringNullableFilter;
  country?: StringNullableFilter;
  desc?: StringNullableFilter;
  followings?: FollowingListRelationFilter;
  foundingdate?: DateTimeNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  name?: StringNullableFilter;
  shortName?: StringNullableFilter;
  state?: StringNullableFilter;
  website?: StringNullableFilter;
};
