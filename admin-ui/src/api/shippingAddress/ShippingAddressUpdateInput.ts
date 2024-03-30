import { UserUpdateManyWithoutShippingAddressesInput } from "./UserUpdateManyWithoutShippingAddressesInput";

export type ShippingAddressUpdateInput = {
  addressName?: string | null;
  city?: string | null;
  country?: string | null;
  houseNo?: string | null;
  nerarestBusstop?: string | null;
  postalCode?: number | null;
  state?: string | null;
  users?: UserUpdateManyWithoutShippingAddressesInput;
};
