import { ApiProperty } from "@nestjs/swagger";
import { InputType, Field, Int } from "@nestjs/graphql";
import { IsString, IsEnum, IsInt } from "class-validator";
import { EnumUserUserType } from "src/user/base/EnumUserUserType";

@InputType()
export class Credentials {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  email!: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;
}


@InputType()
export class Register {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  lastName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsEnum(EnumUserUserType)
  @Field(() => EnumUserUserType, { nullable: false })
  userType!: "Recruiter" | "Talent";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => [String], { nullable: false })
  skills!: string[];

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsInt()
  @Field(() => Int, { nullable: false })
  experience!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: true })
  discipline?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: true })
  employmentType?: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  phone!: string;
}
