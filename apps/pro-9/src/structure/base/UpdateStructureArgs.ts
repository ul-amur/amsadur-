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
import { StructureWhereUniqueInput } from "./StructureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StructureUpdateInput } from "./StructureUpdateInput";

@ArgsType()
class UpdateStructureArgs {
  @ApiProperty({
    required: true,
    type: () => StructureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StructureWhereUniqueInput)
  @Field(() => StructureWhereUniqueInput, { nullable: false })
  where!: StructureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StructureUpdateInput,
  })
  @ValidateNested()
  @Type(() => StructureUpdateInput)
  @Field(() => StructureUpdateInput, { nullable: false })
  data!: StructureUpdateInput;
}

export { UpdateStructureArgs as UpdateStructureArgs };
