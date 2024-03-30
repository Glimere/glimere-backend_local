import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApparelTitle } from "../apparel/ApparelTitle";
import { ApparelTypeTitle } from "../apparelType/ApparelTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const SizeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="apparel.id" reference="Apparel" label="Apparel">
          <SelectInput optionText={ApparelTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="apparelType.id"
          reference="ApparelType"
          label="Apparel_type"
        >
          <SelectInput optionText={ApparelTypeTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
