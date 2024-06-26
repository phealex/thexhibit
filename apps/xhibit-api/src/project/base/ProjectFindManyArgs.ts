 
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProjectOrderByInput } from "./ProjectOrderByInput";

@ArgsType()
class ProjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProjectWhereInput, { nullable: true })
  @Type(() => ProjectWhereInput)
  where?: ProjectWhereInput;

  @ApiProperty({
    required: false,
    type: [ProjectOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProjectOrderByInput], { nullable: true })
  @Type(() => ProjectOrderByInput)
  orderBy?: Array<ProjectOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProjectFindManyArgs as ProjectFindManyArgs };
