import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { APPARELTYPE_TITLE_FIELD } from "../apparelType/ApparelTypeTitle";
import { BRAND_TITLE_FIELD } from "./BrandTitle";
import { CARTITEM_TITLE_FIELD } from "../cartItem/CartItemTitle";
import { MAINCATEGORY_TITLE_FIELD } from "../mainCategory/MainCategoryTitle";
import { WISHLISTITEMS_TITLE_FIELD } from "../wishlistItems/WishlistItemsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BrandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="color" source="color" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="desc" source="desc" />
        <TextField label="founding_date" source="foundingdate" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="name" source="name" />
        <TextField label="short_name" source="shortName" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
        <ReferenceManyField
          reference="Apparel"
          target="brandId"
          label="Apparels"
        >
          <Datagrid rowClick="show">
            <TextField label="apparel_desc" source="apparelDesc" />
            <TextField label="apparel_name" source="apparelName" />
            <TextField label="apparel_price" source="apparelPrice" />
            <ReferenceField
              label="apparel_type"
              source="appareltype.id"
              reference="ApparelType"
            >
              <TextField source={APPARELTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="brand" source="brand.id" reference="Brand">
              <TextField source={BRAND_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Cart_Items"
              source="cartitem.id"
              reference="CartItem"
            >
              <TextField source={CARTITEM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="discounted_price" source="discountedPrice" />
            <TextField label="discount_end_date" source="discountEndDate" />
            <TextField
              label="discount_percentage"
              source="discountPercentage"
            />
            <TextField label="discount_start_date" source="discountStartDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="is_discounted" source="isDiscounted" />
            <ReferenceField
              label="Main_category"
              source="maincategory.id"
              reference="MainCategory"
            >
              <TextField source={MAINCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wishlist_items"
              source="wishlistitems.id"
              reference="WishlistItems"
            >
              <TextField source={WISHLISTITEMS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Following"
          target="brandId"
          label="Followings"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="brand" source="brand.id" reference="Brand">
              <TextField source={BRAND_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="followed_at" source="followedAt" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
