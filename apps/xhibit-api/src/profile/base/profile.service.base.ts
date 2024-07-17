
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Profile, User } from "@prisma/client";

export class ProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) { }

  async count<T extends Prisma.ProfileCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileCountArgs>
  ): Promise<number> {
    const count = await this.prisma.profile.count(args);
    return count as number
  }

  async findMany<T extends Prisma.ProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>
  ): Promise<Profile[]> {
    const profile = await this.prisma.profile.findMany(args);
    return profile as Profile[]
  }
  async findOne<T extends Prisma.ProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>
  ): Promise<Profile | null> {
    const profile = await this.prisma.profile.findUnique<T>(args);
    return profile as Profile
  }
  async create<T extends Prisma.ProfileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.create<T>(args);
  }
  async update<T extends Prisma.ProfileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.update<T>(args);
  }
  async delete<T extends Prisma.ProfileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>
  ): Promise<Profile> {
    return this.prisma.profile.delete(args);
  }

  async findUsers(
    parentId: string,
  ): Promise<User> {
    return this.prisma.profile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user();
  }
}
