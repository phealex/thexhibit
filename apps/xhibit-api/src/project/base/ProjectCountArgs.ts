 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProjectCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @Field(() => ProjectWhereInput, { nullable: true })
  @Type(() => ProjectWhereInput)
  where?: ProjectWhereInput;
}

export { ProjectCountArgs as ProjectCountArgs };
