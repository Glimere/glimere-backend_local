import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";

export const ModelPropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="models.id" reference="Model" label="Models">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
