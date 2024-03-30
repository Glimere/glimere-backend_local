import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApparelTypeTitle } from "../apparelType/ApparelTypeTitle";
import { BrandTitle } from "../brand/BrandTitle";
import { CartItemTitle } from "../cartItem/CartItemTitle";
import { MainCategoryTitle } from "../mainCategory/MainCategoryTitle";
import { MaterialTitle } from "../material/MaterialTitle";
import { ModelTitle } from "../model/ModelTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { SizeTitle } from "../size/SizeTitle";
import { SubCategoryTitle } from "../subCategory/SubCategoryTitle";
import { SubSubcategoryTitle } from "../subSubcategory/SubSubcategoryTitle";
import { WishlistItemsTitle } from "../wishlistItems/WishlistItemsTitle";

export const ApparelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apparel_desc" multiline source="apparelDesc" />
        <TextInput label="apparel_name" source="apparelName" />
        <NumberInput label="apparel_price" source="apparelPrice" />
        <ReferenceInput
          source="apparelType.id"
          reference="ApparelType"
          label="apparel_type"
        >
          <SelectInput optionText={ApparelTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="brand.id" reference="Brand" label="brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="cartItem.id"
          reference="CartItem"
          label="Cart_Items"
        >
          <SelectInput optionText={CartItemTitle} />
        </ReferenceInput>
        <NumberInput label="discounted_price" source="discountedPrice" />
        <DateTimeInput label="discount_end_date" source="discountEndDate" />
        <NumberInput label="discount_percentage" source="discountPercentage" />
        <DateTimeInput label="discount_start_date" source="discountStartDate" />
        <BooleanInput label="is_discounted" source="isDiscounted" />
        <ReferenceInput
          source="mainCategory.id"
          reference="MainCategory"
          label="Main_category"
        >
          <SelectInput optionText={MainCategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="materials"
          reference="Material"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaterialTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="models"
          reference="Model"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ModelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sizes"
          reference="Size"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SizeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subCategories"
          reference="SubCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subSubcategories"
          reference="SubSubcategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubSubcategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="wishlistItems.id"
          reference="WishlistItems"
          label="Wishlist_items"
        >
          <SelectInput optionText={WishlistItemsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
