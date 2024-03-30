import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
