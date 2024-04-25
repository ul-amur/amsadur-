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
import { EmployeeUpdateManyWithoutStructuresInput } from "./EmployeeUpdateManyWithoutStructuresInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StructureUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeUpdateManyWithoutStructuresInput,
  })
  @ValidateNested()
  @Type(() => EmployeeUpdateManyWithoutStructuresInput)
  @IsOptional()
  @Field(() => EmployeeUpdateManyWithoutStructuresInput, {
    nullable: true,
  })
  employees?: EmployeeUpdateManyWithoutStructuresInput;
}

export { StructureUpdateInput as StructureUpdateInput };