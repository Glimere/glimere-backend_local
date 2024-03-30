import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPAREL_TITLE_FIELD } from "../apparel/ApparelTitle";

export const MaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Materials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
