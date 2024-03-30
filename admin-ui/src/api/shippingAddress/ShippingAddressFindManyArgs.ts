import { ShippingAddressWhereInput } from "./ShippingAddressWhereInput";
import { ShippingAddressOrderByInput } from "./ShippingAddressOrderByInput";

export type ShippingAddressFindManyArgs = {
  where?: ShippingAddressWhereInput;
  orderBy?: Array<ShippingAddressOrderByInput>;
  skip?: number;
  take?: number;
};
