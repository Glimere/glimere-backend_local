import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { UserTitle } from "../user/UserTitle";

export const FollowingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <DateTimeInput label="followed_at" source="followedAt" />
        <ReferenceInput source="User.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
