 
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProfileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereInput)
  @IsOptional()
  @Field(() => ProfileWhereInput, {
    nullable: true,
  })
  every?: ProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereInput)
  @IsOptional()
  @Field(() => ProfileWhereInput, {
    nullable: true,
  })
  some?: ProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileWhereInput)
  @IsOptional()
  @Field(() => ProfileWhereInput, {
    nullable: true,
  })
  none?: ProfileWhereInput;
}
export { ProfileListRelationFilter as ProfileListRelationFilter };
