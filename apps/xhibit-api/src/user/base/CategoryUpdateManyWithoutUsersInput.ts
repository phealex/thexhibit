 
import { InputType, Field } from "@nestjs/graphql";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CategoryUpdateManyWithoutUsersInput {
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  connect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  disconnect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  set?: Array<CategoryWhereUniqueInput>;
}

export { CategoryUpdateManyWithoutUsersInput as CategoryUpdateManyWithoutUsersInput };
