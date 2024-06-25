 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectUpdateInput } from "./ProjectUpdateInput";

@ArgsType()
class UpdateProjectArgs {
  @ApiProperty({
    required: true,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @Field(() => ProjectWhereUniqueInput, { nullable: false })
  where!: ProjectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProjectUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateInput)
  @Field(() => ProjectUpdateInput, { nullable: false })
  data!: ProjectUpdateInput;
}

export { UpdateProjectArgs as UpdateProjectArgs };
