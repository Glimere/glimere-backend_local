/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SubSubcategoryWhereUniqueInput } from "../../subSubcategory/base/SubSubcategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SubSubcategoryUpdateManyWithoutApparelsInput {
  @Field(() => [SubSubcategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubSubcategoryWhereUniqueInput],
  })
  connect?: Array<SubSubcategoryWhereUniqueInput>;

  @Field(() => [SubSubcategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubSubcategoryWhereUniqueInput],
  })
  disconnect?: Array<SubSubcategoryWhereUniqueInput>;

  @Field(() => [SubSubcategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubSubcategoryWhereUniqueInput],
  })
  set?: Array<SubSubcategoryWhereUniqueInput>;
}

export { SubSubcategoryUpdateManyWithoutApparelsInput as SubSubcategoryUpdateManyWithoutApparelsInput };