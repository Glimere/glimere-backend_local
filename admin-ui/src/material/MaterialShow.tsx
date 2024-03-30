import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { APPAREL_TITLE_FIELD } from "../apparel/ApparelTitle";

export const MaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="apparel" source="apparel.id" reference="Apparel">
          <TextField source={APPAREL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Environmental_impact" source="environmentalImpact" />
        <TextField label="history_and_origin" source="historyAndOrigin" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_natural" source="isNatural" />
        <TextField label="material_img" source="materialImg" />
        <TextField label="material_name" source="materialName" />
        <TextField label="properties" source="properties" />
        <TextField
          label="sustainability_practices"
          source="sustainabilityPractices"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
