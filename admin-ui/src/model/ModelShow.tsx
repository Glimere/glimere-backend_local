import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MODELPROPERTY_TITLE_FIELD } from "../modelProperty/ModelPropertyTitle";

export const ModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="model_file" source="modelFile" />
        <ReferenceField
          label="model_properties"
          source="modelproperty.id"
          reference="ModelProperty"
        >
          <TextField source={MODELPROPERTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
