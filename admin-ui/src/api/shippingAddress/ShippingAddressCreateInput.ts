import { UserCreateNestedManyWithoutShippingAddressesInput } from "./UserCreateNestedManyWithoutShippingAddressesInput";

export type ShippingAddressCreateInput = {
  addressName?: string | null;
  city?: string | null;
  country?: string | null;
  houseNo?: string | null;
  nerarestBusstop?: string | null;
  postalCode?: number | null;
  state?: string | null;
  users?: UserCreateNestedManyWithoutShippingAddressesInput;
};
