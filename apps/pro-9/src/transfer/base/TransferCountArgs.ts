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
import { TransferWhereInput } from "./TransferWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TransferCountArgs {
  @ApiProperty({
    required: false,
    type: () => TransferWhereInput,
  })
  @Field(() => TransferWhereInput, { nullable: true })
  @Type(() => TransferWhereInput)
  where?: TransferWhereInput;
}

export { TransferCountArgs as TransferCountArgs };
