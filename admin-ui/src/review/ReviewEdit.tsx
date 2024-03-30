import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="apparel.id" reference="Apparel" label="Apparel">
          <SelectInput optionText={ApparelTitle} />
        </ReferenceInput>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="rating_number" source="ratingNumber" />
        <DateTimeInput label="review_time" source="reviewTime" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
