import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ApparelTitle } from "../apparel/ApparelTitle";
import { SubCategoryTitle } from "../subCategory/SubCategoryTitle";

export const MainCategoryCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="cover" source="cover" />
        <TextInput label="name" source="name" />
        <TextInput label="plural_name" source="pluralName" />
        <ReferenceArrayInput
          source="subCategory"
          reference="SubCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubCategoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};