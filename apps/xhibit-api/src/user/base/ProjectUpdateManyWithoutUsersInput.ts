 
import { InputType, Field } from "@nestjs/graphql";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProjectUpdateManyWithoutUsersInput {
  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  connect?: Array<ProjectWhereUniqueInput>;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  disconnect?: Array<ProjectWhereUniqueInput>;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  set?: Array<ProjectWhereUniqueInput>;
}

export { ProjectUpdateManyWithoutUsersInput as ProjectUpdateManyWithoutUsersInput };
