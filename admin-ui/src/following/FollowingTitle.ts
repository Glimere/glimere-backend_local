import { Following as TFollowing } from "../api/following/Following";

export const FOLLOWING_TITLE_FIELD = "id";

export const FollowingTitle = (record: TFollowing): string => {
  return record.id?.toString() || String(record.id);
};
