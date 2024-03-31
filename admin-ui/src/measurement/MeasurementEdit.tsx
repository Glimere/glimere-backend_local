import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SizingUnitTitle } from "../sizingUnit/SizingUnitTitle";

export const MeasurementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="sizingUnit.id"
          reference="SizingUnit"
          label="sizing_unit"
        >
          <SelectInput optionText={SizingUnitTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
