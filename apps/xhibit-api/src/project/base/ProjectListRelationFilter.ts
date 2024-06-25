 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProjectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereInput)
  @IsOptional()
  @Field(() => ProjectWhereInput, {
    nullable: true,
  })
  every?: ProjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereInput)
  @IsOptional()
  @Field(() => ProjectWhereInput, {
    nullable: true,
  })
  some?: ProjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereInput)
  @IsOptional()
  @Field(() => ProjectWhereInput, {
    nullable: true,
  })
  none?: ProjectWhereInput;
}
export { ProjectListRelationFilter as ProjectListRelationFilter };
