 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ProfileFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}

export { ProfileFindUniqueArgs as ProfileFindUniqueArgs };
