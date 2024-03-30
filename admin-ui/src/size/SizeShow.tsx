import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPAREL_TITLE_FIELD } from "../apparel/ApparelTitle";
import { APPARELTYPE_TITLE_FIELD } from "../apparelType/ApparelTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SizeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Apparel" source="apparel.id" reference="Apparel">
          <TextField source={APPAREL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Apparel_type"
          source="appareltype.id"
          reference="ApparelType"
        >
          <TextField source={APPARELTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="measurements" source="measurements" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
