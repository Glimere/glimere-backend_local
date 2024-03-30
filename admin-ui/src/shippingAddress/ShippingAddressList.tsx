import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShippingAddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shipping_addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address_name" source="addressName" />
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="house_no" source="houseNo" />
        <TextField label="ID" source="id" />
        <TextField label="nerarest_busstop" source="nerarestBusstop" />
        <TextField label="postal_code" source="postalCode" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
