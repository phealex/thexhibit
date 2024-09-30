import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { Prisma, User } from "@prisma/client";
import { EnumUserUserType } from "./base/EnumUserUserType";
import { ICreateUser } from "./user.interface";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';
import * as otpGenerator from 'otp-generator';


@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
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


  async triggerPhoneVerificationCode(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId
      }
    })
    if (user && !user.phoneVerifiedAt) {
      const otp = otpGenerator.generate(4, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
      });
      this.cacheManager.set(`${userId}:phone:verification`, otp)
      //send otp to user
      return otp;
    }
    throw new BadRequestException('User has been verified')

  }

  async triggerEmailVerificationCode(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId
      }
    })
    if (user && !user.emailVerifiedAt) {
      const otp = otpGenerator.generate(4, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
      });
      this.cacheManager.set(`${userId}:email:verification`, otp)
      //send otp to user
      return otp;
    }
    throw new BadRequestException('User has been verified')
  }


  async verifyPhone(userId: string, otp: string) {
    const foundOtp = await this.cacheManager.get(`${userId}:phone:verification`)
    if (!foundOtp || foundOtp !== otp) throw new BadRequestException('Invalid OTP')
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: { phoneVerifiedAt: new Date() }
    })
    return true
  }

  async verifyEmail(userId: string, otp: string) {
    const foundOtp = await this.cacheManager.get(`${userId}:email:verification`)
    if (!foundOtp || foundOtp !== otp) throw new BadRequestException('Invalid OTP')
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: { emailVerifiedAt: new Date() }
    })
    return true
  }
}
