import { CardCreateNestedManyWithoutUsersInput } from "./CardCreateNestedManyWithoutUsersInput";
import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { FollowingCreateNestedManyWithoutUsersInput } from "./FollowingCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ShippingAddressCreateNestedManyWithoutUsersInput } from "./ShippingAddressCreateNestedManyWithoutUsersInput";
import { SizeCreateNestedManyWithoutUsersInput } from "./SizeCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  cards?: CardCreateNestedManyWithoutUsersInput;
  carts?: CartCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  followings?: FollowingCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  shippingAddress?: ShippingAddressCreateNestedManyWithoutUsersInput;
  sizes?: SizeCreateNestedManyWithoutUsersInput;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
