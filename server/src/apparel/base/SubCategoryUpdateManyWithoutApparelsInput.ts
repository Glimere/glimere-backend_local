/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SubCategoryWhereUniqueInput } from "../../subCategory/base/SubCategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SubCategoryUpdateManyWithoutApparelsInput {
  @Field(() => [SubCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubCategoryWhereUniqueInput],
  })
  connect?: Array<SubCategoryWhereUniqueInput>;

  @Field(() => [SubCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubCategoryWhereUniqueInput],
  })
  disconnect?: Array<SubCategoryWhereUniqueInput>;

  @Field(() => [SubCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubCategoryWhereUniqueInput],
  })
  set?: Array<SubCategoryWhereUniqueInput>;
}

export { SubCategoryUpdateManyWithoutApparelsInput as SubCategoryUpdateManyWithoutApparelsInput };