 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileCreateInput } from "./ProfileCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProfileArgs {
  @ApiProperty({
    required: true,
    type: () => ProfileCreateInput,
  })
  @ValidateNested()
  @Type(() => ProfileCreateInput)
  @Field(() => ProfileCreateInput, { nullable: false })
  data!: ProfileCreateInput;
}

export { CreateProfileArgs as CreateProfileArgs };
