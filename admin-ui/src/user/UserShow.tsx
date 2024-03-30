import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { APPAREL_TITLE_FIELD } from "../apparel/ApparelTitle";
import { APPARELTYPE_TITLE_FIELD } from "../apparelType/ApparelTypeTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Card" target="userId" label="Cards">
          <Datagrid rowClick="show">
            <TextField label="cardholder_name" source="cardholderName" />
            <TextField label="card_number" source="cardNumber" />
            <TextField label="card_type" source="cardType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="cvv" source="cvv" />
            <TextField label="expiration_month" source="expirationMonth" />
            <TextField label="expiration_year" source="expirationYear" />
            <TextField label="ID" source="id" />
            <BooleanField label="is_default" source="isDefault" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Cart" target="userId" label="Carts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Following"
          target="UserId"
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
        <ReferenceManyField reference="Review" target="userId" label="Reviews">
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
        <ReferenceManyField reference="Size" target="userId" label="Sizes">
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
        <ReferenceManyField
          reference="Wishlist"
          target="userId"
          label="Wishlists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
