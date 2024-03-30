import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrderModule } from "./order/order.module";
import { CustomerModule } from "./customer/customer.module";
import { AddressModule } from "./address/address.module";
import { ApparelModule } from "./apparel/apparel.module";
import { ApparelTypeModule } from "./apparelType/apparelType.module";
import { BrandModule } from "./brand/brand.module";
import { CardModule } from "./card/card.module";
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { FollowingModule } from "./following/following.module";
import { MainCategoryModule } from "./mainCategory/mainCategory.module";
import { SubCategoryModule } from "./subCategory/subCategory.module";
import { SubSubcategoryModule } from "./subSubcategory/subSubcategory.module";
import { MaterialModule } from "./material/material.module";
import { ReviewModule } from "./review/review.module";
import { ShippingAddressModule } from "./shippingAddress/shippingAddress.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { WishlistItemsModule } from "./wishlistItems/wishlistItems.module";
import { ModelModule } from "./model/model.module";
import { ModelPropertyModule } from "./modelProperty/modelProperty.module";
import { SizeModule } from "./size/size.module";
import { MeasurementModule } from "./measurement/measurement.module";
import { SizingUnitModule } from "./sizingUnit/sizingUnit.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    OrderModule,
    CustomerModule,
    AddressModule,
    ApparelModule,
    ApparelTypeModule,
    BrandModule,
    CardModule,
    CartModule,
    CartItemModule,
    FollowingModule,
    MainCategoryModule,
    SubCategoryModule,
    SubSubcategoryModule,
    MaterialModule,
    ReviewModule,
    ShippingAddressModule,
    WishlistModule,
    WishlistItemsModule,
    ModelModule,
    ModelPropertyModule,
    SizeModule,
    MeasurementModule,
    SizingUnitModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
