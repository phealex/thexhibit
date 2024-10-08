
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Project, User } from "@prisma/client";

export class ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) { }

  async count<T extends Prisma.ProjectCountArgs>(
    args
  ): Promise<number> {
    return this.prisma.project.count(args);
  }

  async findMany<T extends Prisma.ProjectFindManyArgs>(
    args
  ): Promise<Project[]> {
    return this.prisma.project.findMany(args);
  }
  async findOne<T extends Prisma.ProjectFindUniqueArgs>(
    args
  ): Promise<Project | null> {
    return this.prisma.project.findUnique(args);
  }
  async create<T extends Prisma.ProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectCreateArgs>
  ): Promise<Project> {
    return this.prisma.project.create<T>(args);
  }
  async update<T extends Prisma.ProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectUpdateArgs>
  ): Promise<Project> {
    return this.prisma.project.update<T>(args);
  }
  async delete<T extends Prisma.ProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectDeleteArgs>
  ): Promise<Project> {
    return this.prisma.project.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.project
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
