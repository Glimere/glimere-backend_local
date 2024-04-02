import { CardUpdateManyWithoutUsersInput } from "./CardUpdateManyWithoutUsersInput";
import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { FollowingUpdateManyWithoutUsersInput } from "./FollowingUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ShippingAddressUpdateManyWithoutUsersInput } from "./ShippingAddressUpdateManyWithoutUsersInput";
import { SizeUpdateManyWithoutUsersInput } from "./SizeUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  cards?: CardUpdateManyWithoutUsersInput;
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  followings?: FollowingUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  shippingAddress?: ShippingAddressUpdateManyWithoutUsersInput;
  sizes?: SizeUpdateManyWithoutUsersInput;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
