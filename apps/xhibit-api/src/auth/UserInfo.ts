import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";
import { JsonValue } from "type-fest";
import GraphQLJSON from "graphql-type-json";

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
}
