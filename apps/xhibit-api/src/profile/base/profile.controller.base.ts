
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProfileService } from "../profile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProfileCreateInput } from "./ProfileCreateInput";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileUpdateInput } from "./ProfileUpdateInput";
import { Profile } from "./Profile";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProfileControllerBase {
  constructor(
    protected readonly service: ProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) { }
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Profile })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ProfileCreateInput,
  })
  async create(@common.Body() data: any): Promise<Profile> {
    return await this.service.create({
      data: data,
      select: {
        aboutProfile: true,
        createdAt: true,
        gender: true,
        id: true,
        profile_category_details: true,
        profile_educational_qualification: true,
        profile_image_url: true,
        updatedAt: true,
        user_Address: true,
        user_social_profiles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Profile] })
  @ApiNestedQuery(ProfileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Profile[]> {
    const args = plainToClass(ProfileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        aboutProfile: true,
        createdAt: true,
        gender: true,
        id: true,
        profile_category_details: true,
        profile_educational_qualification: true,
        profile_image_url: true,
        updatedAt: true,
        user_Address: true,
        user_social_profiles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        aboutProfile: true,
        createdAt: true,
        gender: true,
        id: true,
        profile_category_details: true,
        profile_educational_qualification: true,
        profile_image_url: true,
        updatedAt: true,
        user_Address: true,
        user_social_profiles: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ProfileUpdateInput,
  })
  async update(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() data: ProfileUpdateInput
  ): Promise<Profile | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          aboutProfile: true,
          createdAt: true,
          gender: true,
          id: true,
          profile_category_details: true,
          profile_educational_qualification: true,
          profile_image_url: true,
          updatedAt: true,
          user_Address: true,
          user_social_profiles: true,
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          aboutProfile: true,
          createdAt: true,
          gender: true,
          id: true,
          profile_category_details: true,
          profile_educational_qualification: true,
          profile_image_url: true,
          updatedAt: true,
          user_Address: true,
          user_social_profiles: true,
        },
      });
    } catch (error: any) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUsers(
    @common.Req() request: Request,
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<User> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id);
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  // @common.Patch("/:id/users")
  // @nestAccessControl.UseRoles({
  //   resource: "Profile",
  //   action: "update",
  //   possession: "any",
  // })
  // async updateUsers(
  //   @common.Param() params: ProfileWhereUniqueInput,
  //   @common.Body() body: any
  // ): Promise<void> {
  //   const data = {
  //     user: {
  //       set: body,
  //     },
  //   };
  //   await this.service.update({
  //     where: params,
  //     data,
  //     select: { id: true },
  //   });
  // }
  //
  // @common.Delete("/:id/users")
  // @nestAccessControl.UseRoles({
  //   resource: "Profile",
  //   action: "update",
  //   possession: "any",
  // })
  // async disconnectUsers(
  //   @common.Param() params: ProfileWhereUniqueInput,
  //   @common.Body() body: any
  // ): Promise<void> {
  //   const data = {
  //     user: {
  //       disconnect: body,
  //     },
  //   };
  //   await this.service.update({
  //     where: params,
  //     data,
  //     select: { id: true },
  //   });
  // }
}
