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
import { ApparelCreateNestedManyWithoutMainCategoriesInput } from "./ApparelCreateNestedManyWithoutMainCategoriesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SubCategoryCreateNestedManyWithoutMainCategoriesInput } from "./SubCategoryCreateNestedManyWithoutMainCategoriesInput";

@InputType()
class MainCategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApparelCreateNestedManyWithoutMainCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ApparelCreateNestedManyWithoutMainCategoriesInput)
  @IsOptional()
  @Field(() => ApparelCreateNestedManyWithoutMainCategoriesInput, {
    nullable: true,
  })
  apparels?: ApparelCreateNestedManyWithoutMainCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cover?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pluralName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SubCategoryCreateNestedManyWithoutMainCategoriesInput,
  })
  @ValidateNested()
  @Type(() => SubCategoryCreateNestedManyWithoutMainCategoriesInput)
  @IsOptional()
  @Field(() => SubCategoryCreateNestedManyWithoutMainCategoriesInput, {
    nullable: true,
  })
  subCategory?: SubCategoryCreateNestedManyWithoutMainCategoriesInput;
}

export { MainCategoryCreateInput as MainCategoryCreateInput };