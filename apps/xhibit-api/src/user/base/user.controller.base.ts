
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) { }
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserCreateInput,
  })
  async create(@common.Body() data: UserCreateInput) {
    // return await this.service.create(
    //{
    //   data: {
    //     ...data,
    //
    //     profile: data.profile
    //       ? {
    //           connect: data.profile,
    //         }
    //       : undefined,
    //   },
    //   select: {
    //     createdAt: true,
    //     firstName: true,
    //     id: true,
    //     lastName: true,
    //
    //     profile: {
    //       select: {
    //         id: true,
    //       },
    //     },
    //
    //     roles: true,
    //     updatedAt: true,
    //     email: true,
    //     userType: true,
    //   },
    // });
  }


  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,

        profile: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        email: true,
        userType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,

        profile: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        email: true,
        userType: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserUpdateInput,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          profile: data.profile
            ? {
              connect: data.profile,
            }
            : undefined,
        },
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,

          profile: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          email: true,
          userType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,

          profile: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          email: true,
          userType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/categories")
  @ApiNestedQuery(CategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async findManyCategories(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Category[]> {
    const query = plainToClass(CategoryFindManyArgs, request.query);
    const results = await this.service.findCategories(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectCategories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateCategories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectCategories(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/project")
  @ApiNestedQuery(ProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async findManyProject(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Project[]> {
    const query = plainToClass(ProjectFindManyArgs, request.query);
    const results = await this.service.findProject(params.id, {
      ...query,
      select: {
        allow_negotiation: true,
        createdAt: true,
        description: true,
        icon: true,
        id: true,
        images: true,
        mark_for_sale: true,
        name: true,
        price: true,
        slug: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/project")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectProject(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      project: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/project")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateProject(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      project: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/project")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectProject(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      project: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
