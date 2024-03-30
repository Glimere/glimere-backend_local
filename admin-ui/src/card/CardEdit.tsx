import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cardholder_name" source="cardholderName" />
        <NumberInput step={1} label="card_number" source="cardNumber" />
        <TextInput label="card_type" source="cardType" />
        <NumberInput step={1} label="cvv" source="cvv" />
        <TextInput label="expiration_month" source="expirationMonth" />
        <TextInput label="expiration_year" source="expirationYear" />
        <BooleanInput label="is_default" source="isDefault" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
