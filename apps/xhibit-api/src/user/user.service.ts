import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { Prisma, User } from "@prisma/client";
import { EnumUserUserType } from "./base/EnumUserUserType";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }


  async create<T extends Prisma.UserCreateArgs>(args: any): Promise<User> {
    const user = await this.prisma.user.create<T>({
      ...args,
      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
    if (user.userType === EnumUserUserType.Talent) {
      await this.prisma.talent.create({
        data: {
          userId: user.id,
          discipline: args.data
        }
      })
    }

    return user
  }
}
