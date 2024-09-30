import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";
import { JsonValue } from "type-fest";
import GraphQLJSON from "graphql-type-json";
import { EnumUserUserType } from "src/user/base/EnumUserUserType";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  email!: string;
  @Field(() => GraphQLJSON)
  roles!: JsonValue;
  @Field(() => String, { nullable: true })
  accessToken?: string;
  @Field(() => EnumUserUserType, { nullable: true })
  type?: EnumUserUserType
}
