 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProfileCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;
}

export { ProfileCountArgs as ProfileCountArgs };
