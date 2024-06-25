/* eslint-disable import/no-unresolved */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { INVALID_PASSWORD_ERROR, INVALID_EMAIL_ERROR } from "../constants";
import { ITokenService, ITokenPayload } from "../ITokenService";
/**
 * TokenServiceBase is a jwt bearer implementation of ITokenService
 */
@Injectable()
export class TokenServiceBase implements ITokenService {
  constructor(protected readonly jwtService: JwtService) {}
  /**
   *
   * @object { id: String, email: String, password: String}
   * @returns a jwt token sign with the email and user id
   */
  createToken({ id, email, password }: ITokenPayload): Promise<string> {
    if (!email) return Promise.reject(INVALID_EMAIL_ERROR);
    if (!password) return Promise.reject(INVALID_PASSWORD_ERROR);
    return this.jwtService.signAsync({
      sub: id,
      email,
    });
  }
}
