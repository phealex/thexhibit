 
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Category, User } from "@prisma/client";

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CategoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCountArgs>
  ): Promise<number> {
    return this.prisma.category.count(args);
  }

  async findMany<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<Category[]> {
    return this.prisma.category.findMany(args);
  }
  async findOne<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>
  ): Promise<Category | null> {
    return this.prisma.category.findUnique(args);
  }
  async create<T extends Prisma.CategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
  ): Promise<Category> {
    return this.prisma.category.create<T>(args);
  }
  async update<T extends Prisma.CategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
  ): Promise<Category> {
    return this.prisma.category.update<T>(args);
  }
  async delete<T extends Prisma.CategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
  ): Promise<Category> {
    return this.prisma.category.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.category
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
