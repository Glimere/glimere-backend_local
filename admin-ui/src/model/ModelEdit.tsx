import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";
import { ModelPropertyTitle } from "../modelProperty/ModelPropertyTitle";

export const ModelEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="model_file" source="modelFile" />
        <ReferenceInput
          source="modelProperties.id"
          reference="ModelProperty"
          label="model_properties"
        >
          <SelectInput optionText={ModelPropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
