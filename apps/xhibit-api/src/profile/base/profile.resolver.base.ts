 
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateProfileArgs } from "./CreateProfileArgs";
import { UpdateProfileArgs } from "./UpdateProfileArgs";
import { DeleteProfileArgs } from "./DeleteProfileArgs";
import { ProfileCountArgs } from "./ProfileCountArgs";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileFindUniqueArgs } from "./ProfileFindUniqueArgs";
import { Profile } from "./Profile";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { ProfileService } from "../profile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Profile)
export class ProfileResolverBase {
  constructor(
    protected readonly service: ProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async _profilesMeta(
    @graphql.Args() args: ProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Profile])
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async profiles(
    @graphql.Args() args: ProfileFindManyArgs
  ): Promise<Profile[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Profile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "own",
  })
  async profile(
    @graphql.Args() args: ProfileFindUniqueArgs
  ): Promise<Profile | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "create",
    possession: "any",
  })
  async createProfile(
    @graphql.Args() args: CreateProfileArgs
  ): Promise<Profile> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  async updateProfile(
    @graphql.Args() args: UpdateProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "delete",
    possession: "any",
  })
  async deleteProfile(
    @graphql.Args() args: DeleteProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUsers(
    @graphql.Parent() parent: Profile,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
