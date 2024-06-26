 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserUserType } from "./EnumUserUserType";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => ProfileWhereUniqueInput, {
    nullable: true,
  })
  profile?: ProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  project?: ProjectUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    enum: EnumUserUserType,
  })
  @IsEnum(EnumUserUserType)
  @IsOptional()
  @Field(() => EnumUserUserType, {
    nullable: true,
  })
  userType?: "Recruiter" | "Talent";
}

export { UserUpdateInput as UserUpdateInput };
