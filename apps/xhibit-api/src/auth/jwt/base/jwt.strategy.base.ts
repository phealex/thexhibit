import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthStrategy } from "../../IAuthStrategy";
import { UserService } from "../../../user/user.service";
import { UserInfo } from "../../UserInfo";

export class JwtStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(
    protected readonly userService: UserService,
    protected readonly secretOrKey: string
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: UserInfo): Promise<UserInfo> {
    const { email } = payload;
    const user = await this.userService.findOne({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (
      !Array.isArray(user.roles) ||
      typeof user.roles !== "object" ||
      user.roles === null
    ) {
      throw new Error("User roles is not a valid value");
    }
    return { ...user, roles: user.roles as string[] };
  }
}
