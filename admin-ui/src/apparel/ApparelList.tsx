import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPARELTYPE_TITLE_FIELD } from "../apparelType/ApparelTypeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CARTITEM_TITLE_FIELD } from "../cartItem/CartItemTitle";
import { MAINCATEGORY_TITLE_FIELD } from "../mainCategory/MainCategoryTitle";
import { WISHLISTITEMS_TITLE_FIELD } from "../wishlistItems/WishlistItemsTitle";

export const ApparelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Apparels"}
      perPage={50}
      pagination={<Pagination />}
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
      </Datagrid>
    </List>
  );
};
