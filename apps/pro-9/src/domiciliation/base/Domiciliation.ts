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
import { Address } from "../../address/base/Address";
import { ValidateNested, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Employee } from "../../employee/base/Employee";

@ObjectType()
class Domiciliation {
  @ApiProperty({
    required: true,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  employees?: Employee;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Domiciliation as Domiciliation };