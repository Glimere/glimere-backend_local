/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShippingAddressWhereUniqueInput } from "./ShippingAddressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShippingAddressUpdateInput } from "./ShippingAddressUpdateInput";

@ArgsType()
class UpdateShippingAddressArgs {
  @ApiProperty({
    required: true,
    type: () => ShippingAddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShippingAddressWhereUniqueInput)
  @Field(() => ShippingAddressWhereUniqueInput, { nullable: false })
  where!: ShippingAddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShippingAddressUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShippingAddressUpdateInput)
  @Field(() => ShippingAddressUpdateInput, { nullable: false })
  data!: ShippingAddressUpdateInput;
}

export { UpdateShippingAddressArgs as UpdateShippingAddressArgs };