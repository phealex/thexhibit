 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutProfilesInput } from "./UserUpdateManyWithoutProfilesInput";
import { Type } from "class-transformer";

@InputType()
class ProfileUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  aboutProfile?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profile_category_details?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profile_educational_qualification?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profile_image_url?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  user_Address?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutProfilesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutProfilesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutProfilesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutProfilesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  user_social_profiles?: InputJsonValue;
}

export { ProfileUpdateInput as ProfileUpdateInput };
