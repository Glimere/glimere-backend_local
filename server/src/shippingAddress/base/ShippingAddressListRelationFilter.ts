/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShippingAddressWhereInput } from "./ShippingAddressWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShippingAddressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShippingAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => ShippingAddressWhereInput)
  @IsOptional()
  @Field(() => ShippingAddressWhereInput, {
    nullable: true,
  })
  every?: ShippingAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShippingAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => ShippingAddressWhereInput)
  @IsOptional()
  @Field(() => ShippingAddressWhereInput, {
    nullable: true,
  })
  some?: ShippingAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShippingAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => ShippingAddressWhereInput)
  @IsOptional()
  @Field(() => ShippingAddressWhereInput, {
    nullable: true,
  })
  none?: ShippingAddressWhereInput;
}
export { ShippingAddressListRelationFilter as ShippingAddressListRelationFilter };