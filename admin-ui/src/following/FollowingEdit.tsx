import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { BrandTitle } from "../brand/BrandTitle";
import { UserTitle } from "../user/UserTitle";

export const FollowingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <DateTimeInput label="followed_at" source="followedAt" />
        <ReferenceInput source="User.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
