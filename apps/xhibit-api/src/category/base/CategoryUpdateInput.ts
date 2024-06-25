 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutCategoriesInput } from "./UserUpdateManyWithoutCategoriesInput";
import { Type } from "class-transformer";

@InputType()
class CategoryUpdateInput {
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
    type: () => UserUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutCategoriesInput;
}

export { CategoryUpdateInput as CategoryUpdateInput };
