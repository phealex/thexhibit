 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProfileUpdateInput } from "./ProfileUpdateInput";

@ArgsType()
class UpdateProfileArgs {
  @ApiProperty({
    required: true,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProfileUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProfileUpdateInput)
  @Field(() => ProfileUpdateInput, { nullable: false })
  data!: ProfileUpdateInput;
}

export { UpdateProfileArgs as UpdateProfileArgs };
