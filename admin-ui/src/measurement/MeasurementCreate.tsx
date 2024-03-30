import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SizingUnitTitle } from "../sizingUnit/SizingUnitTitle";

export const MeasurementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="sizingUnit.id"
          reference="SizingUnit"
          label="sizing_unit"
        >
          <SelectInput optionText={SizingUnitTitle} />
        </ReferenceInput>
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
