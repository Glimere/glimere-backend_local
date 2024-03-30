import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ApparelList } from "./apparel/ApparelList";
import { ApparelCreate } from "./apparel/ApparelCreate";
import { ApparelEdit } from "./apparel/ApparelEdit";
import { ApparelShow } from "./apparel/ApparelShow";
import { ApparelTypeList } from "./apparelType/ApparelTypeList";
import { ApparelTypeCreate } from "./apparelType/ApparelTypeCreate";
import { ApparelTypeEdit } from "./apparelType/ApparelTypeEdit";
import { ApparelTypeShow } from "./apparelType/ApparelTypeShow";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { CardList } from "./card/CardList";
import { CardCreate } from "./card/CardCreate";
import { CardEdit } from "./card/CardEdit";
import { CardShow } from "./card/CardShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { CartItemList } from "./cartItem/CartItemList";
import { CartItemCreate } from "./cartItem/CartItemCreate";
import { CartItemEdit } from "./cartItem/CartItemEdit";
import { CartItemShow } from "./cartItem/CartItemShow";
import { FollowingList } from "./following/FollowingList";
import { FollowingCreate } from "./following/FollowingCreate";
import { FollowingEdit } from "./following/FollowingEdit";
import { FollowingShow } from "./following/FollowingShow";
import { MainCategoryList } from "./mainCategory/MainCategoryList";
import { MainCategoryCreate } from "./mainCategory/MainCategoryCreate";
import { MainCategoryEdit } from "./mainCategory/MainCategoryEdit";
import { MainCategoryShow } from "./mainCategory/MainCategoryShow";
import { SubCategoryList } from "./subCategory/SubCategoryList";
import { SubCategoryCreate } from "./subCategory/SubCategoryCreate";
import { SubCategoryEdit } from "./subCategory/SubCategoryEdit";
import { SubCategoryShow } from "./subCategory/SubCategoryShow";
import { SubSubcategoryList } from "./subSubcategory/SubSubcategoryList";
import { SubSubcategoryCreate } from "./subSubcategory/SubSubcategoryCreate";
import { SubSubcategoryEdit } from "./subSubcategory/SubSubcategoryEdit";
import { SubSubcategoryShow } from "./subSubcategory/SubSubcategoryShow";
import { MaterialList } from "./material/MaterialList";
import { MaterialCreate } from "./material/MaterialCreate";
import { MaterialEdit } from "./material/MaterialEdit";
import { MaterialShow } from "./material/MaterialShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { ShippingAddressList } from "./shippingAddress/ShippingAddressList";
import { ShippingAddressCreate } from "./shippingAddress/ShippingAddressCreate";
import { ShippingAddressEdit } from "./shippingAddress/ShippingAddressEdit";
import { ShippingAddressShow } from "./shippingAddress/ShippingAddressShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { WishlistItemsList } from "./wishlistItems/WishlistItemsList";
import { WishlistItemsCreate } from "./wishlistItems/WishlistItemsCreate";
import { WishlistItemsEdit } from "./wishlistItems/WishlistItemsEdit";
import { WishlistItemsShow } from "./wishlistItems/WishlistItemsShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { ModelPropertyList } from "./modelProperty/ModelPropertyList";
import { ModelPropertyCreate } from "./modelProperty/ModelPropertyCreate";
import { ModelPropertyEdit } from "./modelProperty/ModelPropertyEdit";
import { ModelPropertyShow } from "./modelProperty/ModelPropertyShow";
import { SizeList } from "./size/SizeList";
import { SizeCreate } from "./size/SizeCreate";
import { SizeEdit } from "./size/SizeEdit";
import { SizeShow } from "./size/SizeShow";
import { MeasurementList } from "./measurement/MeasurementList";
import { MeasurementCreate } from "./measurement/MeasurementCreate";
import { MeasurementEdit } from "./measurement/MeasurementEdit";
import { MeasurementShow } from "./measurement/MeasurementShow";
import { SizingUnitList } from "./sizingUnit/SizingUnitList";
import { SizingUnitCreate } from "./sizingUnit/SizingUnitCreate";
import { SizingUnitEdit } from "./sizingUnit/SizingUnitEdit";
import { SizingUnitShow } from "./sizingUnit/SizingUnitShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Glimere"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Apparel"
          list={ApparelList}
          edit={ApparelEdit}
          create={ApparelCreate}
          show={ApparelShow}
        />
        <Resource
          name="ApparelType"
          list={ApparelTypeList}
          edit={ApparelTypeEdit}
          create={ApparelTypeCreate}
          show={ApparelTypeShow}
        />
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="Card"
          list={CardList}
          edit={CardEdit}
          create={CardCreate}
          show={CardShow}
        />
        <Resource
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="CartItem"
          list={CartItemList}
          edit={CartItemEdit}
          create={CartItemCreate}
          show={CartItemShow}
        />
        <Resource
          name="Following"
          list={FollowingList}
          edit={FollowingEdit}
          create={FollowingCreate}
          show={FollowingShow}
        />
        <Resource
          name="MainCategory"
          list={MainCategoryList}
          edit={MainCategoryEdit}
          create={MainCategoryCreate}
          show={MainCategoryShow}
        />
        <Resource
          name="SubCategory"
          list={SubCategoryList}
          edit={SubCategoryEdit}
          create={SubCategoryCreate}
          show={SubCategoryShow}
        />
        <Resource
          name="SubSubcategory"
          list={SubSubcategoryList}
          edit={SubSubcategoryEdit}
          create={SubSubcategoryCreate}
          show={SubSubcategoryShow}
        />
        <Resource
          name="Material"
          list={MaterialList}
          edit={MaterialEdit}
          create={MaterialCreate}
          show={MaterialShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="ShippingAddress"
          list={ShippingAddressList}
          edit={ShippingAddressEdit}
          create={ShippingAddressCreate}
          show={ShippingAddressShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
        <Resource
          name="WishlistItems"
          list={WishlistItemsList}
          edit={WishlistItemsEdit}
          create={WishlistItemsCreate}
          show={WishlistItemsShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="ModelProperty"
          list={ModelPropertyList}
          edit={ModelPropertyEdit}
          create={ModelPropertyCreate}
          show={ModelPropertyShow}
        />
        <Resource
          name="Size"
          list={SizeList}
          edit={SizeEdit}
          create={SizeCreate}
          show={SizeShow}
        />
        <Resource
          name="Measurement"
          list={MeasurementList}
          edit={MeasurementEdit}
          create={MeasurementCreate}
          show={MeasurementShow}
        />
        <Resource
          name="SizingUnit"
          list={SizingUnitList}
          edit={SizingUnitEdit}
          create={SizingUnitCreate}
          show={SizingUnitShow}
        />
      </Admin>
    </div>
  );
};

export default App;
