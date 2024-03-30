import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";

export const MaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="apparel.id" reference="Apparel" label="apparel">
          <SelectInput optionText={ApparelTitle} />
        </ReferenceInput>
        <NumberInput label="cost" source="cost" />
        <div />
        <TextInput
          label="history_and_origin"
          multiline
          source="historyAndOrigin"
        />
        <BooleanInput label="is_natural" source="isNatural" />
        <TextInput label="material_img" source="materialImg" />
        <TextInput label="material_name" source="materialName" />
        <div />
        <TextInput
          label="sustainability_practices"
          multiline
          source="sustainabilityPractices"
        />
      </SimpleForm>
    </Edit>
  );
};
