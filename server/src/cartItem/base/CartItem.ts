/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { Apparel } from "../../apparel/base/Apparel";
import { Type } from "class-transformer";
import { Cart } from "../../cart/base/Cart";

@ObjectType()
class CartItem {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  apparelId!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Apparel],
  })
  @ValidateNested()
  @Type(() => Apparel)
  @IsOptional()
  apparels?: Array<Apparel>;

  @ApiProperty({
    required: false,
    type: () => Cart,
  })
  @ValidateNested()
  @Type(() => Cart)
  @IsOptional()
  cart?: Cart | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { CartItem as CartItem };