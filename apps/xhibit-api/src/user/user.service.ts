import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { Prisma, User } from "@prisma/client";
import { EnumUserUserType } from "./base/EnumUserUserType";
import { ICreateUser } from "./user.interface";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }


  async create(args: ICreateUser): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: {
          password: await this.passwordService.hash(args.password),
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          userType: args.userType,
          roles: args.roles,
          phone: args.phone,
        },
      });
      if (user.userType === EnumUserUserType.Talent) {
        await this.prisma.talent.create({
          data: {
            userId: user.id,
            discipline: args.discipline!,
            skills: args.skills,
            yearsOfExperience: args.experience,
          }
        })
      } else if (user.userType === EnumUserUserType.Recruiter) {
        await this.prisma.recruiter.create({
          data: {
            userId: user.id,
            talentSkills: args.skills,
            employmentType: args.employmentType!,
            talentExperience: args.experience
          }
        })
      }
      return user
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}
