 
import { InputType, Field } from "@nestjs/graphql";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProjectCreateNestedManyWithoutUsersInput {
  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  connect?: Array<ProjectWhereUniqueInput>;
}

export { ProjectCreateNestedManyWithoutUsersInput as ProjectCreateNestedManyWithoutUsersInput };
