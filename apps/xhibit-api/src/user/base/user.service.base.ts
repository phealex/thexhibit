
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, User, Category, Project, Profile } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";
import { EnumUserUserType } from "./EnumUserUserType";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) { }

  async count<T extends Prisma.UserCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCountArgs>
  ): Promise<number> {
    const count = await this.prisma.user.count(args);
    return count as number
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    const user = await this.prisma.user.findMany(args);
    return user as User[]
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique(args);
    return user as User
  }
  async create(
    args: any
  ): Promise<User> {
    const user = await this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
    return user
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findCategories(
    parentId: string,
    args: Prisma.CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .categories(args);
  }

  async findProject(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .project(args);
  }

  async getProfile(parentId: string): Promise<Profile | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .profile();
  }
}
