import { FollowingWhereInput } from "./FollowingWhereInput";
import { FollowingOrderByInput } from "./FollowingOrderByInput";

export type FollowingFindManyArgs = {
  where?: FollowingWhereInput;
  orderBy?: Array<FollowingOrderByInput>;
  skip?: number;
  take?: number;
};
