 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserCreateNestedManyWithoutCategoriesInput } from "./UserCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  icon?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutCategoriesInput;
}

export { CategoryCreateInput as CategoryCreateInput };
