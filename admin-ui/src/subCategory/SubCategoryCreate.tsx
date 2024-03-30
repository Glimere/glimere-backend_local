import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ApparelTitle } from "../apparel/ApparelTitle";
import { MainCategoryTitle } from "../mainCategory/MainCategoryTitle";
import { SubSubcategoryTitle } from "../subSubcategory/SubSubcategoryTitle";

export const SubCategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apparel"
          reference="Apparel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApparelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mainCategories"
          reference="MainCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MainCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subSubcategory"
          reference="SubSubcategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubSubcategoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
