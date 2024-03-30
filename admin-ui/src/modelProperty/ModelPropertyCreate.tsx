import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";

export const ModelPropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="models.id" reference="Model" label="Models">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
