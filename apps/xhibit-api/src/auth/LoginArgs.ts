import { ArgsType, Field } from "@nestjs/graphql";
import { Credentials, Register } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: Credentials;
}



@ArgsType()
export class RegisterArgs {
  @Field(() => Register, { nullable: false })
  credentials!: Register;
}