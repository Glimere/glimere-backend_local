import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cardholder_name" source="cardholderName" />
        <TextField label="card_number" source="cardNumber" />
        <TextField label="card_type" source="cardType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cvv" source="cvv" />
        <TextField label="expiration_month" source="expirationMonth" />
        <TextField label="expiration_year" source="expirationYear" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_default" source="isDefault" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
