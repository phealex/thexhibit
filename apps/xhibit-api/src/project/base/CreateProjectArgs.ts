 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProjectArgs {
  @ApiProperty({
    required: true,
    type: () => ProjectCreateInput,
  })
  @ValidateNested()
  @Type(() => ProjectCreateInput)
  @Field(() => ProjectCreateInput, { nullable: false })
  data!: ProjectCreateInput;
}

export { CreateProjectArgs as CreateProjectArgs };
