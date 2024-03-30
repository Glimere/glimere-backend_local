import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";
import { ModelPropertyTitle } from "../modelProperty/ModelPropertyTitle";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
