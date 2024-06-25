import { Test, TestingModule } from "@nestjs/testing";
// @ts-ignore
// eslint-disable-next-line
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
// @ts-ignore
// eslint-disable-next-line
import { TokenService } from "./token.service";
import { VALID_ID } from "../tests/auth/constants";

const VALID_CREDENTIALS: Credentials = {
  email: "Valid User",
  password: "Valid User Password",
};
const INVALID_CREDENTIALS: Credentials = {
  email: "Invalid User",
  password: "Invalid User Password",
};
const USER: any = {
  ...VALID_CREDENTIALS,
  createdAt: new Date(),
  firstName: "ofek",
  id: VALID_ID,
  lastName: "gabay",
  roles: ["admin"],
  updatedAt: new Date(),
};

const SIGN_TOKEN = "SIGN_TOKEN";

const userService = {
  findOne(args: { where: { email: string } }): any | null {
    if (args.where.email === VALID_CREDENTIALS.email) {
      return USER;
    }
    return null;
  },
};

const passwordService = {
  compare(password: string, encrypted: string) {
    return true;
  },
};

const tokenService = {
  createToken(email: string, password: string) {
    return SIGN_TOKEN;
  },
};

describe("AuthService", () => {
  //ARRANGE
  let service: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: userService,
        },
        {
          provide: PasswordService,
          useValue: passwordService,
        },
        {
          provide: TokenService,
          useValue: tokenService,
        },
        AuthService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("Testing the authService.validateUser()", () => {
    it("should validate a valid user", async () => {
      await expect(
        service.validateUser(
          VALID_CREDENTIALS.email,
          VALID_CREDENTIALS.password
        )
      ).resolves.toEqual({
        email: USER.email,
        roles: USER.roles,
        id: USER.id,
      });
    });

    it("should not validate a invalid user", async () => {
      await expect(
        service.validateUser(
          INVALID_CREDENTIALS.email,
          INVALID_CREDENTIALS.password
        )
      ).resolves.toBe(null);
    });
  });

  describe("Testing the authService.login()", () => {
    it("should return userInfo object for correct email and password", async () => {
      const loginResult = await service.login(VALID_CREDENTIALS);
      expect(loginResult).toEqual({
        email: USER.email,
        roles: USER.roles,
        accessToken: SIGN_TOKEN,
        id: USER.id,
      });
    });
  });
});
