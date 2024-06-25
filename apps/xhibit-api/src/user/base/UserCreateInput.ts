 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserUserType } from "./EnumUserUserType";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CategoryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CategoryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutUsersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

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
    type: () => ProjectCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProjectCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProjectCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  project?: ProjectCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    enum: EnumUserUserType,
  })
  @IsEnum(EnumUserUserType)
  @Field(() => EnumUserUserType)
  userType!: "Recruiter" | "Talent";
}

export { UserCreateInput as UserCreateInput };
