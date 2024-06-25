/** @format */

import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Credentials, Register } from "./Credentials";
import { UserInfo } from "./UserInfo";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }

  @Post("register")
  async register(@Body() body: Register): Promise<UserInfo> {
    return this.authService.register(body);
  }
}
