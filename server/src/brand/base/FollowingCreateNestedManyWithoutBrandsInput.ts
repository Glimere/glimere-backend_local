/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FollowingWhereUniqueInput } from "../../following/base/FollowingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FollowingCreateNestedManyWithoutBrandsInput {
  @Field(() => [FollowingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowingWhereUniqueInput],
  })
  connect?: Array<FollowingWhereUniqueInput>;
}

export { FollowingCreateNestedManyWithoutBrandsInput as FollowingCreateNestedManyWithoutBrandsInput };