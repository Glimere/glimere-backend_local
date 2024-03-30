import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPAREL_TITLE_FIELD } from "./ApparelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { APPARELTYPE_TITLE_FIELD } from "../apparelType/ApparelTypeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CARTITEM_TITLE_FIELD } from "../cartItem/CartItemTitle";
import { MAINCATEGORY_TITLE_FIELD } from "../mainCategory/MainCategoryTitle";
import { WISHLISTITEMS_TITLE_FIELD } from "../wishlistItems/WishlistItemsTitle";

export const ApparelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="discount_percentage" source="discountPercentage" />
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
        <ReferenceManyField
          reference="Material"
          target="apparelId"
          label="Materials"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="apparel"
              source="apparel.id"
              reference="Apparel"
            >
              <TextField source={APPAREL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField
              label="Environmental_impact"
              source="environmentalImpact"
            />
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="apparelId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Apparel"
              source="apparel.id"
              reference="Apparel"
            >
              <TextField source={APPAREL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rating_number" source="ratingNumber" />
            <TextField label="review_time" source="reviewTime" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Size" target="apparelId" label="Sizes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Apparel"
              source="apparel.id"
              reference="Apparel"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
