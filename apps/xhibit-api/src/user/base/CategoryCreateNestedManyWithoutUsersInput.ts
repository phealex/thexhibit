 
import { InputType, Field } from "@nestjs/graphql";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CategoryCreateNestedManyWithoutUsersInput {
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoryWhereUniqueInput],
  })
  connect?: Array<CategoryWhereUniqueInput>;
}

export { CategoryCreateNestedManyWithoutUsersInput as CategoryCreateNestedManyWithoutUsersInput };
