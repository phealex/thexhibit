import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
// @ts-ignore
// eslint-disable-next-line
import { UserService } from "../user/user.service";
import { Credentials, Register } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { EnumUserUserType } from "src/user/base/EnumUserUserType";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService
  ) { }

  async validateUser(
    email: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { email },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, email, roles: roleList, type: user.userType as EnumUserUserType };
    }
    return null;
  }

  async login(credentials: Credentials): Promise<UserInfo> {
    const { email, password } = credentials;
    const user = await this.validateUser(
      credentials.email,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      email,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }

  async register(credentials: Register): Promise<UserInfo> {
    const userExist = await this.userService.findOne({
      where: { email: credentials.email },
    });
    if (userExist !== null) {
      throw new BadRequestException("User already exists");
    }
    const user = await this.userService.create(
      { ...credentials, roles: ["user"] },
    );
    return this.login({ email: user.email, password: credentials.password })
  }
}
