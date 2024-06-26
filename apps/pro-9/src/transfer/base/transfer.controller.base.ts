/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TransferService } from "../transfer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TransferCreateInput } from "./TransferCreateInput";
import { Transfer } from "./Transfer";
import { TransferFindManyArgs } from "./TransferFindManyArgs";
import { TransferWhereUniqueInput } from "./TransferWhereUniqueInput";
import { TransferUpdateInput } from "./TransferUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TransferControllerBase {
  constructor(
    protected readonly service: TransferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transfer })
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TransferCreateInput,
  })
  async createTransfer(
    @common.Body() data: TransferCreateInput
  ): Promise<Transfer> {
    return await this.service.createTransfer({
      data: {
        ...data,

        address: data.address
          ? {
              connect: data.address,
            }
          : undefined,

        employee: {
          connect: data.employee,
        },
      },
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Transfer] })
  @ApiNestedQuery(TransferFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transfers(@common.Req() request: Request): Promise<Transfer[]> {
    const args = plainToClass(TransferFindManyArgs, request.query);
    return this.service.transfers({
      ...args,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transfer(
    @common.Param() params: TransferWhereUniqueInput
  ): Promise<Transfer | null> {
    const result = await this.service.transfer({
      where: params,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TransferUpdateInput,
  })
  async updateTransfer(
    @common.Param() params: TransferWhereUniqueInput,
    @common.Body() data: TransferUpdateInput
  ): Promise<Transfer | null> {
    try {
      return await this.service.updateTransfer({
        where: params,
        data: {
          ...data,

          address: data.address
            ? {
                connect: data.address,
              }
            : undefined,

          employee: {
            connect: data.employee,
          },
        },
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Transfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transfer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTransfer(
    @common.Param() params: TransferWhereUniqueInput
  ): Promise<Transfer | null> {
    try {
      return await this.service.deleteTransfer({
        where: params,
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
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
}
