/** @format */

import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Category } from "../../category/base/Category";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Profile } from "../../profile/base/Profile";
import { Project } from "../../project/base/Project";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumUserUserType } from "./EnumUserUserType";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Category],
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  categories?: Array<Category>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => Profile,
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  profile?: Profile | null;

  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  project?: Array<Project>;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

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
  @Field(() => EnumUserUserType, {
    nullable: true,
  })
  userType?: "Recruiter" | "Talent";

  @ApiProperty({ required: false })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date, { nullable: true })
  emailVerifiedAt?: Date | null;

  @ApiProperty({ required: false })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date, { nullable: true })
  phoneVerifiedAt?: Date | null;
}

export { User as User };
