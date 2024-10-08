import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs, RegisterArgs } from "./LoginArgs";
import { UserInfo } from "./UserInfo";

@Resolver(UserInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }
  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
  }

  @Mutation(() => UserInfo)
  async register(@Args() args: RegisterArgs): Promise<UserInfo> {
    return this.authService.register(args.credentials);
  }

  @Query(() => UserInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async userInfo(@UserData() userInfo: UserInfo): Promise<UserInfo> {
    return userInfo;
  }
}
