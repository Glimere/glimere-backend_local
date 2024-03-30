import { ShippingAddress as TShippingAddress } from "../api/shippingAddress/ShippingAddress";

export const SHIPPINGADDRESS_TITLE_FIELD = "addressName";

export const ShippingAddressTitle = (record: TShippingAddress): string => {
  return record.addressName?.toString() || String(record.id);
};
