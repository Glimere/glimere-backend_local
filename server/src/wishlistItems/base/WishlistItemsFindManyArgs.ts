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
import { WishlistItemsWhereInput } from "./WishlistItemsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WishlistItemsOrderByInput } from "./WishlistItemsOrderByInput";

@ArgsType()
class WishlistItemsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WishlistItemsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WishlistItemsWhereInput, { nullable: true })
  @Type(() => WishlistItemsWhereInput)
  where?: WishlistItemsWhereInput;

  @ApiProperty({
    required: false,
    type: [WishlistItemsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WishlistItemsOrderByInput], { nullable: true })
  @Type(() => WishlistItemsOrderByInput)
  orderBy?: Array<WishlistItemsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WishlistItemsFindManyArgs as WishlistItemsFindManyArgs };