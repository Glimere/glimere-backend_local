import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";
import { FollowingTitle } from "../following/FollowingTitle";

export const BrandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apparels"
          reference="Apparel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApparelTitle} />
        </ReferenceArrayInput>
        <TextInput label="color" source="color" />
        <TextInput label="country" source="country" />
        <TextInput label="desc" multiline source="desc" />
        <ReferenceArrayInput
          source="followings"
          reference="Following"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FollowingTitle} />
        </ReferenceArrayInput>
        <DateInput label="founding_date" source="foundingdate" />
        <TextInput label="logo" source="logo" />
        <TextInput label="name" source="name" />
        <TextInput label="short_name" source="shortName" />
        <TextInput label="state" source="state" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
