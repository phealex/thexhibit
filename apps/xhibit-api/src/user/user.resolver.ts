import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserResolverBase } from "./base/user.resolver.base";
import { User } from "./base/User";
import { UserService } from "./user.service";
import { Int, Mutation } from "@nestjs/graphql";
import { UserData } from "src/auth/userData.decorator";
import { UserInfo } from "src/auth/UserInfo";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolver extends UserResolverBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Mutation(() => Int)
  async triggerEmailVerification(@UserData() userInfo: UserInfo) {
    return this.service.triggerEmailVerificationCode(userInfo.id)
  }

  @Mutation(() => Int)
  async triggerPhoneVerification(@UserData() userInfo: UserInfo) {
    return this.service.triggerPhoneVerificationCode(userInfo.id)
  }
}
