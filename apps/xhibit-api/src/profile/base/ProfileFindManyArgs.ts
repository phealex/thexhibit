 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProfileOrderByInput } from "./ProfileOrderByInput";

@ArgsType()
class ProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [ProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProfileOrderByInput], { nullable: true })
  @Type(() => ProfileOrderByInput)
  orderBy?: Array<ProfileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProfileFindManyArgs as ProfileFindManyArgs };
