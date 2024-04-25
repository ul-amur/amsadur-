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
import { Dial } from "../../dial/base/Dial";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Domiciliation } from "../../domiciliation/base/Domiciliation";
import { Transfer } from "../../transfer/base/Transfer";
import { Structure } from "../../structure/base/Structure";

@ObjectType()
class Employee {
  @ApiProperty({
    required: true,
    type: () => [Dial],
  })
  @ValidateNested()
  @Type(() => Dial)
  @IsOptional()
  contacts?: Array<Dial>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Domiciliation,
  })
  @ValidateNested()
  @Type(() => Domiciliation)
  @IsOptional()
  domiciliation?: Domiciliation | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Transfer,
  })
  @ValidateNested()
  @Type(() => Transfer)
  @IsOptional()
  relocation?: Transfer | null;

  @ApiProperty({
    required: false,
    type: () => Structure,
  })
  @ValidateNested()
  @Type(() => Structure)
  @IsOptional()
  structure?: Structure | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Employee as Employee };